import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Journal } from 'src/app/models/journals';

@Component({
  selector: 'app-delete-journal-dialog',
  templateUrl: './delete-journal-dialog.component.html',
  styleUrls: ['./delete-journal-dialog.component.scss']
})
export class DeleteJournalDialogComponent {

  

  delete: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<DeleteJournalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { journal: Journal }
  ) {}

  onDelete() {
    this.dialogRef.close(this.delete);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
