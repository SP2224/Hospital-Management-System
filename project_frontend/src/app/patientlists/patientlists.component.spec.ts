import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientlistsComponent } from './patientlists.component';

describe('PatientlistsComponent', () => {
  let component: PatientlistsComponent;
  let fixture: ComponentFixture<PatientlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientlistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
