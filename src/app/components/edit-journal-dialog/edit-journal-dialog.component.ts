import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Journal, MoodEnum } from 'src/app/models/journals';

@Component({
  selector: 'app-edit-journal-dialog',
  templateUrl: './edit-journal-dialog.component.html',
  styleUrls: ['./edit-journal-dialog.component.scss'],
})
export class EditJournalDialogComponent {
  editJournalForm!: FormGroup;
  moodEnumArray = Object.values(MoodEnum);

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditJournalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { journal: Journal }
  ) {}

  ngOnInit() {
    this.editJournalForm = this.fb.group({
      title: [this.data.journal.Title],
      mood: [this.data.journal.Mood],
      message: [this.data.journal.Message],
      privacy: [this.data.journal.Privacy],
    });
  }

  onSubmit() {
    // Implement your form submission logic here
    this.dialogRef.close(this.editJournalForm.value);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
