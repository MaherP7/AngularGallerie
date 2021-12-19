import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PhotosJoursComponent } from './pages/photos-jours/photos-jours.component';
import { MatIconModule } from '@angular/material/icon';
import { FormChercherImageComponent } from './shared/form-chercher-image/form-chercher-image.component';
import { BtnAjouterSuppFavComponent } from './shared/btn-ajouter-supp-fav/btn-ajouter-supp-fav.component';
import { ListImagesComponent } from './features/list-images/list-images.component';
import { ListImagesItemComponent } from './features/list-images-item/list-images-item.component';
import { MarsImagesService } from './core/services/mars-images.service';
import { HttpClientModule } from '@angular/common/http';
import { MyGalleryService } from './core/services/my-gallery.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    ContactComponent,
    PhotosJoursComponent,
    FormChercherImageComponent,
    BtnAjouterSuppFavComponent,
    ListImagesComponent,
    ListImagesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MarsImagesService,
    MyGalleryService
  ],
  bootstrap: [
    AppComponent,
    HomeComponent
  ]
})
export class AppModule { }
