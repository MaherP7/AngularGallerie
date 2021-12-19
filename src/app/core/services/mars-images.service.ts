import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MarsImagesService {
  imagesMars: any = [];
  //imageUpdate:EventEmitter = new EventEmitter();

  key :string = "&api_key=X9JQn1Irln6oq3miD467i13IrlO9vAIE780DWWfA";
  api_link_latest :string = "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?";
  api_link:string = "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?";
  page:string = "page=1";
  earth_date:string = "&earth_date=2021-11-10";

  constructor(private http : HttpClient) { }

  setEarthDate(date: Date){
    if(typeof date !== 'undefined'){
      let date_format = formatDate(date,'yyyy-MM-dd','en');
      this.earth_date = "&earth_date="+date_format;
      console.log(this.earth_date);
      //this.getMarsImagesFromAPI();
      //this.imageUpdate.emit(this.imagesMars);
    }else{
      console.log(date);
    }
  }

  getDate(){
    return this.earth_date.slice(12);
  }

  getMarsImagesFromAPI(date: Date){
    if(typeof date !== 'undefined'){
      let date_format = formatDate(date,'yyyy-MM-dd','en');
      this.earth_date = "&earth_date="+date_format;
      //this.imageUpdate.emit(this.imagesMars);
    }else{
      let date_format = formatDate(new Date(),'yyyy-MM-dd','en');
      this.earth_date = "&earth_date="+date_format;
      console.log("Date indéfinie");
    }

    return this.http.get(this.api_link+''+this.page+''+this.earth_date+''+this.key);
  }

  getNewMarsImagesFromAPI(){
    return this.http.get(this.api_link_latest+this.page+this.key);
  }
}
