import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTruckScheduleComponent } from './new-truck-schedule.component';

describe('NewTruckScheduleComponent', () => {
  let component: NewTruckScheduleComponent;
  let fixture: ComponentFixture<NewTruckScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTruckScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTruckScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
