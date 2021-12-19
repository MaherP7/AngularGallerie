import { Component, Input, OnInit } from '@angular/core';
import { MyGalleryService } from 'src/app/core/services/my-gallery.service';

@Component({
  selector: 'app-btn-ajouter-supp-fav',
  templateUrl: './btn-ajouter-supp-fav.component.html',
  styleUrls: ['./btn-ajouter-supp-fav.component.css']
})
export class BtnAjouterSuppFavComponent implements OnInit {
  @Input() typeBtn: String = "Ajouter";
  variant: String = "primary";

  @Input() currentObj!:object;

  constructor(private gallerie: MyGalleryService) { }

  ngOnInit(): void {
  }

  getVariant(){
    if(this.typeBtn == "Ajouter")
      return "btn btn-outline-primary";
    else
      return "btn btn-outline-danger";
  }

  onClick(){
    switch(this.typeBtn){
      case 'Ajouter':
        this.ajouter();
      break;
      default:
        this.supprimer();
      break;
    }
  }

  ajouter(){
    console.log("Ajouter "+JSON.stringify(this.currentObj));
    if(this.currentObj)
      this.gallerie.addPhoto(this.currentObj);
  }

  supprimer(){
    console.log("Supprimer "+JSON.stringify(this.currentObj));
    if(this.currentObj)
      this.gallerie.deletePhoto(this.currentObj);
  }
}
