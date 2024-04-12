import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewJournalComponent } from './create-new-journal.component';

describe('CreateNewJournalComponent', () => {
  let component: CreateNewJournalComponent;
  let fixture: ComponentFixture<CreateNewJournalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewJournalComponent]
    });
    fixture = TestBed.createComponent(CreateNewJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
