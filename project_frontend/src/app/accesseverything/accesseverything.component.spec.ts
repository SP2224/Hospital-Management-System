import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesseverythingComponent } from './accesseverything.component';

describe('AccesseverythingComponent', () => {
  let component: AccesseverythingComponent;
  let fixture: ComponentFixture<AccesseverythingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesseverythingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesseverythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
