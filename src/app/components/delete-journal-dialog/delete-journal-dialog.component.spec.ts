import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJournalDialogComponent } from './delete-journal-dialog.component';

describe('DeleteJournalDialogComponent', () => {
  let component: DeleteJournalDialogComponent;
  let fixture: ComponentFixture<DeleteJournalDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteJournalDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteJournalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
