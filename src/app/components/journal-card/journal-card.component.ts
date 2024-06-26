import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditJournalDialogComponent } from '../edit-journal-dialog/edit-journal-dialog.component';
import { DeleteJournalDialogComponent } from '../delete-journal-dialog/delete-journal-dialog.component';
import { JournalService } from 'src/app/services/journal.service';
import { UserDTO } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-journal-card',
  templateUrl: './journal-card.component.html',
  styleUrls: ['./journal-card.component.scss'],
})
export class JournalCardComponent {
  @Input() myJournal!: any[];
  @Input() isFromLanding: boolean = false;
  myUser!: UserDTO;
  userSubscription: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private journalService: JournalService,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  async ngOnInit() {
    this.userSubscription = this.userService.myUser.subscribe((user) => {
      this.myUser = user;
    });
  }

  async editJournal(journal: any) {
    const dialogRef = this.dialog.open(EditJournalDialogComponent, {
      width: '500px',
      data: { journal },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        const updatedJournal = { ...journal };
        updatedJournal.Title = result.title;
        updatedJournal.Mood = result.mood;
        updatedJournal.Message = result.message;
        updatedJournal.Privacy = result.privacy;
        await this.journalService.editJournalEntry(journal, updatedJournal);
        window.location.reload();
      }
    });
  }

  async deleteJournal(journal: any) {
    const dialogRef = this.dialog.open(DeleteJournalDialogComponent, {
      width: '500px',
      data: { journal },
    });
    dialogRef.afterClosed().subscribe(async (result)=>{
      if (result){
        /**Delete logic */
      await this.journalService.deleteJournalEntry(journal);
      this.notificationService.sendNotification('Journal entry successfully deleted!');
      window.location.reload();
      }
    })
    
  }

}
