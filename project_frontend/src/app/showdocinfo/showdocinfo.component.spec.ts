import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdocinfoComponent } from './showdocinfo.component';

describe('ShowdocinfoComponent', () => {
  let component: ShowdocinfoComponent;
  let fixture: ComponentFixture<ShowdocinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdocinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdocinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
