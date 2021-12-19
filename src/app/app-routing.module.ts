import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotosJoursComponent } from './pages/photos-jours/photos-jours.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'photos', component: PhotosJoursComponent},
  {path:'contact',component:ContactComponent},
  {path:'gallerie',component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
