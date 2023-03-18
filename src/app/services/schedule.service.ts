import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewTruckRequest} from "../common/new-truck-request";
import {ScheduleDto} from "../common/schedule-dto";

@Injectable({
  providedIn: 'root'
})
export class Schedule {
  API_ROOT: string = "http://keeptruckin.balakumar.xyz:8089/api";
  constructor(private httpClient: HttpClient) { }
  newTruckSchedule(newTruck: NewTruckRequest) : Observable<any> {
    return this.httpClient.post<NewTruckRequest>(this.API_ROOT + "/truck", newTruck);
  }
  getTodaySchedule() : Observable<ScheduleDto> {
    return this.httpClient.get<ScheduleDto>(this.API_ROOT + "/schedule");
  }
}
