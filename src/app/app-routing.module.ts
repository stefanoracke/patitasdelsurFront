import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';

const routes: Routes = [
  {
    path:"",
    loadChildren: ()=>import("./features/public/public.module").then((m)=>m.PublicModule)
},
{
  path:"admin",
  loadChildren: ()=>import("./features/backoffice/backoffice.module").then((m)=>m.BackofficeModule)
},
{
  path: "patitasdelsur/administracion/login",
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
