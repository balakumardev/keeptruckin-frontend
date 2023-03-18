import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { TodaySchedule } from './components/today-schedule-component/today-schedule.component';
import { NewTruckScheduleComponent } from './components/new-truck-schedule/new-truck-schedule.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {Schedule} from "./services/schedule.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

const routes : Routes = [
  {path: 'today', component: TodaySchedule},
  {path: 'new-truck', component: NewTruckScheduleComponent},
  {path: '', redirectTo:'/today', pathMatch:'full'},
  {path: '**', redirectTo:'/today', pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    TodaySchedule,
    NewTruckScheduleComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, Schedule],
  bootstrap: [AppComponent]
})
export class AppModule { }
