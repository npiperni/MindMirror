import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Journal } from 'src/app/models/journals';
import { UserDTO } from 'src/app/models/users';
import { JournalService } from 'src/app/services/journal.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-journal',
  templateUrl: './my-journal.component.html',
  styleUrls: ['./my-journal.component.scss']
})
export class MyJournalComponent {
  myUser!: UserDTO;
  journalsArray: Journal[] = [];
  userSubscription: Subscription = new Subscription();
  loading = true;

  constructor(
    private userService: UserService,
    private journalService: JournalService
  ) {}

  async ngOnInit() {
    this.userSubscription = this.userService.myUser.subscribe((user) => {
      this.myUser = user;
      this.getMyJournalEntries();
    });
  }

  async getMyJournalEntries() {
    if (this.myUser) {
      this.loading = true;
      this.journalsArray = await this.journalService.getMyJournalEntries(
        this.myUser.ID
      );
      this.loading = false;
    }
  }
}
