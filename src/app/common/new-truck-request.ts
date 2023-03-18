export class NewTruckRequest {
  dayCode: string | undefined;
  truckName: string | undefined;

  public constructor(d : string = "", t: string= "") {
    this.dayCode = d;
    this.truckName = t;
  }
}
