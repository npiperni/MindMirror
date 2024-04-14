import { Component } from '@angular/core';
import { Subscription, filter, take } from 'rxjs';
import { Journal, TempJournal } from 'src/app/models/journals';
import { UserDTO } from 'src/app/models/users';
import { JournalService } from 'src/app/services/journal.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  myUser!: UserDTO;
  journalsArray: Journal[] = [];
  myJournalsArray: TempJournal[] = [];
  userSubscription: Subscription = new Subscription();
  loading = true;

  constructor(
    private userService: UserService,
    private journalService: JournalService
  ) {}

  async ngOnInit() {
    this.userSubscription = this.userService.myUser
      .pipe(
        filter((user) => user !== null),
        take(1)
      )
      .subscribe((user) => {
        this.myUser = user;
        this.getMyFeed();
      });
  }

  async getMyFeed() {
    if (this.myUser) {
      this.loading = true;
      this.journalsArray = [];
      this.journalsArray = await this.journalService.getFeed(this.myUser);
      for (let journal of this.journalsArray) {
        const userId = journal.UserID;
        const user = await this.userService.getUser(userId);
        if (user) {
          const email = user.Email;
          const tempJournal: TempJournal = {
            ...journal,
            Email: email,
          };
          this.myJournalsArray.push(tempJournal);
          this.myJournalsArray.sort((a, b) => {
            return new Date(a.Date).getTime() - new Date(b.Date).getTime();
          });
        }
      }
      this.loading = false;
    }
  }
}
