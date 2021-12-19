import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarsImagesService } from 'src/app/core/services/mars-images.service';

@Component({
  selector: 'app-photos-jours',
  templateUrl: './photos-jours.component.html',
  styleUrls: ['./photos-jours.component.css']
})
export class PhotosJoursComponent implements OnInit {
  //imagesMars : any = [];

  constructor(private marsImages : MarsImagesService) { }

  ngOnInit(): void {
    if(this.marsImages.imagesMars.length <= 0)
      this.marsImages.getMarsImagesFromAPI(new Date()).subscribe(
        (response:any) => {
          this.marsImages.imagesMars = response;
          //console.log(response);
        },
        (error) => {
          console.log(error);
        });
  }

  getDate(){
    return this.marsImages.getDate();
  }

  getPhotos(){
    return this.marsImages.imagesMars.photos;
  }
}
