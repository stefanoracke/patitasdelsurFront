import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdoptaComponent } from './adopta/adopta.component';
import { ProvisorioComponent } from './provisorio/provisorio.component';

const routes: Routes = [
  {
    path:"",
    children: [
      {
        path:"",
        component: HomeComponent
      },
      {
        path:"adopciones",
        component: AdoptaComponent
      },
      {
        path:"se-provi",
        component: ProvisorioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
