import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorlistsComponent } from './doctorlists.component';

describe('DoctorlistsComponent', () => {
  let component: DoctorlistsComponent;
  let fixture: ComponentFixture<DoctorlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorlistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
