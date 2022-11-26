import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedListComponent } from './acceptedlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


describe('AcceptedListComponent', () => {
  let fixture: ComponentFixture<AcceptedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedListComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
  });
});
