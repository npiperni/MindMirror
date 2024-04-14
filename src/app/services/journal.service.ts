import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Journal } from '../models/journals';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private db: AngularFireDatabase) { }

  uploadJournalEntry(entry: Journal): void {
    console.log('Inside Service: Uploading Journal Entry')
    this.db.list('journal entries').push(entry);
  }
}
