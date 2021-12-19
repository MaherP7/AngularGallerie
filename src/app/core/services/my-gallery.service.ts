import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyGalleryService {
  listeFav: any = [];
  constructor() {}

  addPhoto(obj: any){
    console.log("ajout de "+JSON.stringify(obj));
    this.listeFav.push({img_src:obj.src,id:obj.id});
    console.log("liste actuel : "+JSON.stringify(this.listeFav));
  }

  deletePhoto(obj: any){
    this.listeFav = this.listeFav.filter((data :any) => data.id !== obj.id);
  }

  getListeFav(){
    return this.listeFav;
  }
}
