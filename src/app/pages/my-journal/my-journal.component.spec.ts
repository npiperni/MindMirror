import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJournalComponent } from './my-journal.component';

describe('MyJournalComponent', () => {
  let component: MyJournalComponent;
  let fixture: ComponentFixture<MyJournalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyJournalComponent]
    });
    fixture = TestBed.createComponent(MyJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
