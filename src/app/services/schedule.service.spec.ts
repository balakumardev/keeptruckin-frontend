import { TestBed } from '@angular/core/testing';

import { Schedule } from './schedule.service';

describe('ScheduleServiceService', () => {
  let service: Schedule;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Schedule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
