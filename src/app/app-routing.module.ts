import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UploadImageComponent } from "./components/upload-image/upload-image.component";



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: UploadImageComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
