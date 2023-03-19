import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewTruckRequest} from "../common/new-truck-request";
import {Truck} from "../common/truck";
import {EditTruckRequest} from "../common/edit-truck-request";

@Injectable({
  providedIn: 'root'
})
export class Schedule {
  API_ROOT: string = "http://localhost:8080/api";
  constructor(private httpClient: HttpClient) { }
  newTruckSchedule(newTruck: NewTruckRequest) : Observable<any> {
    return this.httpClient.post<NewTruckRequest>(this.API_ROOT + "/truck", newTruck);
  }
  updateTruck(oldName: string, newName: string) {
    let editTruckRequest: EditTruckRequest = new EditTruckRequest(oldName, newName);
    return this.httpClient.put<EditTruckRequest>(this.API_ROOT + "/truck", editTruckRequest);
  }
  getTodaySchedule() : Observable<Truck[]> {
    return this.httpClient.get<Truck[]>(this.API_ROOT + "/schedule/today");
  }
}
