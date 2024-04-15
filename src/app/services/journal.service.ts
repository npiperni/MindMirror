import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Journal, PrivacyEnum } from '../models/journals';
import {
  equalTo,
  get,
  getDatabase,
  orderByChild,
  query,
  ref,
  remove,
  update,
} from 'firebase/database';
import { UserDTO } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor(private db: AngularFireDatabase) {}

  async uploadJournalEntry(entry: Journal) {
    const ref = this.db.list('journal entries').push(entry);
    const id = ref.key;
    if (id) {
      entry.JournalID = id;
      await ref.set(entry);
    }
  }

  async getMyJournalEntries(userId: string): Promise<Journal[]> {
    const db = getDatabase();
    const journalRef = ref(db, 'journal entries');
    const userJournalQuery = query(
      journalRef,
      orderByChild('UserID'),
      equalTo(userId)
    );
    const snapshot = await get(userJournalQuery);
    const journalEntries = snapshot.val();

    if (!journalEntries) {
      return [];
    }

    // Convert the journal entries object to an array
    return Object.values(journalEntries).map((entry) => entry as Journal);
  }

  async getFeed(user: UserDTO): Promise<Journal[]> {
    const db = getDatabase();
    const journalRef = ref(db, 'journal entries');

    const userJournalEntries = await this.getMyJournalEntries(user.ID);
    const publicUserJournalEntries = userJournalEntries
      .map((entry) => entry as Journal)
      .filter((journal) => journal.Privacy === PrivacyEnum.Public);

    let friendJournalEntries: Journal[] = [];
    if (user.Friends) {
      for (const friendID of user.Friends) {
        const friendJournalQuery = query(
          journalRef,
          orderByChild('UserID'),
          equalTo(friendID)
        );
        const friendJournalSnapshot = await get(friendJournalQuery);
        const entries = friendJournalSnapshot.val();

        if (entries) {
          const friendJournals = Object.values(entries)
            .map((entry) => entry as Journal)
            .filter((journal) => journal.Privacy === PrivacyEnum.Public);
          friendJournalEntries = [...friendJournalEntries, ...friendJournals];
        }
      }
    }

    return [...publicUserJournalEntries, ...friendJournalEntries];
  }

  async editJournalEntry(originalEntry: Journal, updatedEntry: Journal) {
    const db = getDatabase();
    const originalJournalRef = ref(
      db,
      'journal entries/' + originalEntry.JournalID
    );
    await update(originalJournalRef, updatedEntry);
  }

  async deleteJournalEntry(entry: Journal) {
    const db = getDatabase();
    const journalRef = ref(db, 'journal entries/' + entry.JournalID);
    await remove(journalRef);
  }
}
