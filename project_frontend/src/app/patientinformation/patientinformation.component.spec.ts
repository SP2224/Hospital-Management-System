import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientinformationComponent } from './patientinformation.component';

describe('PatientinformationComponent', () => {
  let component: PatientinformationComponent;
  let fixture: ComponentFixture<PatientinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
