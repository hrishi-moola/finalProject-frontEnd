export class LoginResultModel {
    token: string;
    auth: boolean;
    error: string;
    user: string;


    constructor(private tokenNew : string, private errorNew : string, private authNew : boolean, private userNew : string){
        this.token = tokenNew;
        this.error = errorNew;
        this.auth = authNew;
        this.user = userNew;

      }
  }


  export class QuerySelectorsModel{
      cityList: string[];
      hotelList: string[];
      constructor( public cities: string, public hotels: string){
          this.cityList = this.getListFromCSV(cities);
          this.hotelList = this.getListFromCSV(hotels);
      }
      getListFromCSV(csv): string[]{
          console.log("split " + csv);
          return csv.split(",");
      }
  }

