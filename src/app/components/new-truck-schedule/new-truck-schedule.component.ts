import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {Schedule} from "../../services/schedule.service";
import {NewTruckRequest} from "../../common/new-truck-request";

@Component({
  selector: 'app-new-truck-schedule',
  templateUrl: './new-truck-schedule.component.html',
  styleUrls: ['./new-truck-schedule.component.css']
})
export class NewTruckScheduleComponent {
  newTruckFormGroup: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private router: Router,
              private datePipe: DatePipe,
              private scheduleService: Schedule) {
    this.newTruckFormGroup = this.formbuilder.group({
      truck: this.formbuilder.group({
          name: new FormControl('', [Validators.required]),
          date: new FormControl('', [Validators.required])
        }
      )
    });
  }

  onSubmit() {
    let truckName: string = this.newTruckFormGroup!.get('truck')!.get('name')?.value;
    let dayCode: string = this.datePipe.transform(this.newTruckFormGroup!.get('truck')!.get('date')?.value, 'ddMMyyyy')!;
    this.scheduleService.newTruckSchedule(new NewTruckRequest(dayCode, truckName)).subscribe(
      {
        next: result => {
          alert("Succesfully created");
          this.router.navigateByUrl("/today?newSchedule=true")
        },
        error: error => {
          alert("Error creating the project : " + error.message);
        }
      }
    );
  }
}
