import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJournalDialogComponent } from './edit-journal-dialog.component';

describe('EditJournalDialogComponent', () => {
  let component: EditJournalDialogComponent;
  let fixture: ComponentFixture<EditJournalDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditJournalDialogComponent]
    });
    fixture = TestBed.createComponent(EditJournalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
