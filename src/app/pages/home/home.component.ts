import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  versPhotoParJour():void {
   this.router.navigate(['/photos']);
  };

  versGalerie():void {
   this.router.navigate(['/gallerie']);
  };

  ngOnInit(): void {
  }

}
