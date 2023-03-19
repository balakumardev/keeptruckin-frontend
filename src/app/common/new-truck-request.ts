/* This DTO class is used as a request for the Create Truck API */
export class NewTruckRequest {
  public constructor(public endDate: string = '',
                     public truckName: string = '',
                     public sunday: boolean = false,
                     public monday: boolean = false,
                     public tuesday: boolean = false,
                     public wednesday: boolean = false,
                     public thursday: boolean = false,
                     public friday: boolean = false,
                     public saturday: boolean = false
  ) {
  }
}
