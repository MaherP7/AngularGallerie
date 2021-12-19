import { Component, OnInit } from '@angular/core';
import { MyGalleryService } from 'src/app/core/services/my-gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  listFav: any = [];

  constructor(private galerie: MyGalleryService) { }

  ngOnInit(): void {
    
  }

  getPhotos(){
    console.log(JSON.stringify("Liste dans gallery : "+this.galerie.getListeFav()));
    return this.galerie.getListeFav();
  }
}
