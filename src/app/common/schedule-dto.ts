export class ScheduleDto {

  constructor(public dayCode: string = "",
              public trucks: string[] = []) {
  }
}
