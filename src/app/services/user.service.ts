import { User } from './../models/users';
import { Injectable } from '@angular/core';
import { UserDTO } from '../models/users';
import { Database, ref, set } from '@angular/fire/database';
import { get, getDatabase, onValue } from 'firebase/database';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private myUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  myUser = this.myUserSubject.asObservable();

  constructor(private database: Database, private authService: AuthService) {
    this.callSubscribeToUser();
  }

  callSubscribeToUser() {
    return new Promise<void>((resolve) => {
      let myUser = this.authService.getUser() as User;
      if (this.myUser) {
        const callback = (user: any) => {
          this.myUser = user;
          resolve();
        };

        if (myUser) {
          this.subscribeToUser(myUser.uid, callback);
        }
      } else {
        resolve();
      }
    });
  }

  async subscribeToUser(userId: string, callback: any) {
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}`);
    onValue(
      userRef,
      (snapshot) => {
        if (snapshot.exists()) {
          this.updateUser(snapshot.val() as UserDTO);
          callback(snapshot.val() as UserDTO);
        } else {
          callback(null);
        }
      },
      {
        onlyOnce: false,
      }
    );
  }

  async registerUser(value: any, id: string, path: string) {
    const fullNameParts = value.fullname.split(' ');
    const user: UserDTO = {
      FirstName: fullNameParts[0],
      LastName: fullNameParts.slice(1).join(' '),
      ID: id,
      Email: value.email,
      Friends: [],
    };

    set(ref(this.database, path + id), user);
  }

  async getUser(userId: string): Promise<UserDTO | null> {
    try {
      const db = getDatabase();
      const userRef = ref(db, `users/${userId}`);
      const userSnapshot = await get(userRef);
      if (userSnapshot.exists()) {
        return userSnapshot.val() as UserDTO;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  updateUser(user: UserDTO | null) {
    this.myUserSubject.next(user);
  }
}
