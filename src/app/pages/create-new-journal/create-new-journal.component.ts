import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Journal, MoodEnum } from 'src/app/models/journals';
import { UserDTO } from 'src/app/models/users';
import { JournalService } from 'src/app/services/journal.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-new-journal',
  templateUrl: './create-new-journal.component.html',
  styleUrls: ['./create-new-journal.component.scss'],
})
export class CreateNewJournalComponent {
  journalForm!: FormGroup;
  myUser!: UserDTO;
  userSubscription: Subscription = new Subscription();
  uploading = false;
  moodEnumArray = Object.values(MoodEnum);

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private userService: UserService,
    private journalService: JournalService
  ) {}

  async ngOnInit() {
    this.journalForm = this.formBuilder.group({
      title: ['', Validators.required],
      mood: [MoodEnum.Happy, Validators.required],
      privacy: ['Private', Validators.required],
      entry: ['', Validators.required],
    });

    this.userSubscription = this.userService.myUser.subscribe((user) => {
      this.myUser = user;
    });
  }

  async onSubmit() {
    if (this.journalForm.valid) {
      this.uploading = true;
      const journalEntry: Journal = {
        Message: this.journalForm.value.entry,
        Date: new Date().getTime(),
        Title: this.journalForm.value.title,
        Mood: this.journalForm.value.mood,
        UserID: this.myUser.ID,
        Privacy: this.journalForm.value.privacy,
      };
      await this.journalService.uploadJournalEntry(journalEntry);
      this.journalForm.reset();
      this.uploading = false;
      this.notificationService.sendNotification('Journal entry uploaded');
    } else {
      this.notificationService.sendAlert('Form is not valid');
    }
  }
}
