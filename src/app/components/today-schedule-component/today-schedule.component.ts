import {Component, OnInit} from '@angular/core';
import {Schedule} from "../../services/schedule.service";
import {Truck} from "../../common/truck";

@Component({
  selector: 'app-today-schedule-component',
  templateUrl: './today-schedule.component.html',
  styleUrls: ['./today-schedule.component.css']
})
export class TodaySchedule implements OnInit{

  trucks: Truck[] = [];
  constructor(private scheduleService: Schedule) {
  }

  ngOnInit(): void {
    this.scheduleService.getTodaySchedule().subscribe(
      result => {
        this.trucks = result;
        console.log(this.trucks);
      }
    )
  }

}
