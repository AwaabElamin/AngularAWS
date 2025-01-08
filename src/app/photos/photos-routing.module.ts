import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniImageComponent } from './mini-image/mini-image.component';

const routes: Routes = [
  { path: 'mini/:url/:width/:height', component: MiniImageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
