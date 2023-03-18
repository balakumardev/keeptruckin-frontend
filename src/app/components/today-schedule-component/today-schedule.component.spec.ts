import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySchedule } from './today-schedule.component';

describe('TodayScheduleComponentComponent', () => {
  let component: TodaySchedule;
  let fixture: ComponentFixture<TodaySchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaySchedule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaySchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
