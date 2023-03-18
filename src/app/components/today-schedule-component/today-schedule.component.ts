import {Component, OnInit} from '@angular/core';
import {Schedule} from "../../services/schedule.service";
import {ScheduleDto} from "../../common/schedule-dto";

@Component({
  selector: 'app-today-schedule-component',
  templateUrl: './today-schedule.component.html',
  styleUrls: ['./today-schedule.component.css']
})
export class TodaySchedule implements OnInit{

  scheduleDto: ScheduleDto = new ScheduleDto();
  constructor(private scheduleService: Schedule) {
  }

  ngOnInit(): void {
    this.scheduleService.getTodaySchedule().subscribe(
      result => {
        this.scheduleDto = result;
        console.log(this.scheduleDto);
      }
    )
  }

}
