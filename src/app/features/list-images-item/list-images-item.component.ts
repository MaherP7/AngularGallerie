import { Component, Input, OnInit } from '@angular/core';
import { MyGalleryService } from 'src/app/core/services/my-gallery.service';

@Component({
  selector: 'app-list-images-item',
  templateUrl: './list-images-item.component.html',
  styleUrls: ['./list-images-item.component.css']
})
export class ListImagesItemComponent implements OnInit {
  @Input() src!: string;
  @Input() id!: string;
  @Input() listType!: string;

  constructor(private gallery:MyGalleryService) { }

  ngOnInit(): void {
    console.log(this.getCurrObj());
  }

  getCurrObj(){
    return {src:this.src,id:this.id};
  }
}
