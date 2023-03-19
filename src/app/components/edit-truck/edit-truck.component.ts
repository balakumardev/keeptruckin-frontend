import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Schedule} from "../../services/schedule.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-truck',
  templateUrl: './edit-truck.component.html',
  styleUrls: ['./edit-truck.component.css']
})
export class EditTruckComponent implements OnInit {
  truckName: string = '';

  editTruckFormGroup : FormGroup;
  constructor(private actRoute:ActivatedRoute,
              private router: Router,
              private schedule:Schedule,
              private formbuilder: FormBuilder) {
    this.editTruckFormGroup = this.formbuilder.group({
      truck: this.formbuilder.group({
        newName : new FormControl('')
      })
    });
  }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(params => {
      this.truckName = params['truckName'];
      console.log("editing truck: " + this.truckName);
    })
  }

  onSubmit(): void {
    let newName: string = this.editTruckFormGroup.get('truck')!.get('newName')?.value;

    this.schedule.updateTruck(this.truckName, newName).subscribe({
        next: result => {
          alert("succesfully updated");
          this.router.navigateByUrl('/today');
        },
        error: error => {
          alert("error updating : " + error);
        }
      }
    )
  }

}
