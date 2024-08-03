import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TkbComponent } from './tkb.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'tkb', component:TkbComponent, 
    children:[
      {path:'header', component:HeaderComponent},
      {path:'home', component:HomeComponent},
      {path:'user', loadChildren:() => import('../../app/tkb/user/user.module').then(m => m.UserModule)},
      {path:'', redirectTo:'/login', pathMatch:'full'},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TkbRoutingModule { }
