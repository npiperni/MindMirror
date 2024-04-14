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
} from 'firebase/database';
import { UserDTO } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor(private db: AngularFireDatabase) {}

  async uploadJournalEntry(entry: Journal) {
    this.db.list('journal entries').push(entry);
  }

  async getMyJournalEntries(userId: string) {
    const db = getDatabase();
    const journalRef = ref(db, 'journal entries');
    const snapshot = await get(journalRef);
    const journalNodeExists = snapshot.exists();

    if (!journalNodeExists) {
      return false;
    }

    const journalsQuery = query(
      journalRef,
      orderByChild('UserID'),
      equalTo(userId)
    );
    const JournalsSnapshot = await get(journalsQuery);
    const myJournalEntries = JournalsSnapshot.val();
    return myJournalEntries;
  }

  async getFeed(user: UserDTO) {
    const db = getDatabase();
    const journalRef = ref(db, 'journal entries');
    const snapshot = await get(journalRef);
    const journalNodeExists = snapshot.exists();

    if (!journalNodeExists) {
      return false;
    }

    const userJournalQuery = query(
      journalRef,
      orderByChild('UserID'),
      equalTo(user.ID)
    );
    const userJournalSnapshot = await get(userJournalQuery);
    const userJournalEntries = userJournalSnapshot.val();

    let friendJournalEntries = {};
    for (const friendID of user.Friends) {
      const friendJournalQuery = query(
        journalRef,
        orderByChild('UserID'),
        equalTo(friendID),
        orderByChild('Privacy'),
        equalTo(PrivacyEnum.Public)
      );
      const friendJournalSnapshot = await get(friendJournalQuery);
      const entries = friendJournalSnapshot.val();
      friendJournalEntries = { ...friendJournalEntries, ...entries };
    }

    const myFeed = {
      ...userJournalEntries,
      ...friendJournalEntries,
    };

    return myFeed;
  }
}
