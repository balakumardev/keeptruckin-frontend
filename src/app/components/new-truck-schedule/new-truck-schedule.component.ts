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
          date: new FormControl('', [Validators.required]),
          sunday: new FormControl(''),
          monday: new FormControl(''),
          tuesday: new FormControl(''),
          wednesday: new FormControl(''),
          thursday: new FormControl(''),
          friday: new FormControl(''),
        }
      )
    });
  }

  onSubmit() {
    let truckName: string = this.newTruckFormGroup!.get('truck')!.get('name')?.value;
    let endDate: string = this.datePipe.transform(this.newTruckFormGroup!.get('truck')!.get('date')?.value, 'yyyy-MM-dd')!;
    let sunday: boolean = this.newTruckFormGroup!.get('truck')!.get('sunday')?.value;
    let monday: boolean = this.newTruckFormGroup!.get('truck')!.get('monday')?.value;
    let tuesday: boolean = this.newTruckFormGroup!.get('truck')!.get('tuesday')?.value;
    let wednesday: boolean = this.newTruckFormGroup!.get('truck')!.get('wednesday')?.value;
    let thursday: boolean = this.newTruckFormGroup!.get('truck')!.get('thursday')?.value;
    let friday: boolean = this.newTruckFormGroup!.get('truck')!.get('friday')?.value;
    let saturday: boolean = this.newTruckFormGroup!.get('truck')!.get('saturday')?.value;
    this.scheduleService.newTruckSchedule(new NewTruckRequest(endDate, truckName, sunday, monday, tuesday, wednesday, thursday, friday, saturday)).subscribe(
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
