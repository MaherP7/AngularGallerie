import { Component, Input, OnInit } from '@angular/core';
import { MarsImagesService } from 'src/app/core/services/mars-images.service';

@Component({
  selector: 'app-form-chercher-image',
  templateUrl: './form-chercher-image.component.html',
  styleUrls: ['./form-chercher-image.component.css']
})
export class FormChercherImageComponent implements OnInit {
  @Input() dateEntree!:Date;

  constructor(private marsImages:MarsImagesService) { }

  ngOnInit(): void {
  }

  sendForm(data:any){
    console.log(data.dateJour);
    this.marsImages.getMarsImagesFromAPI(data.dateJour).subscribe(
      (res: any)=> {
        this.marsImages.imagesMars = res;
        console.log(JSON.stringify(res));
      },
      (err) =>{
        console.log(err);
      });
  }  

}
