import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftComponent } from './gift.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'gift', component:GiftComponent, 
    children:[
      {path:'header', component:HeaderComponent},
      {path:'home', component:HomeComponent},
      {path:'', redirectTo:'/gift/home', pathMatch:'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftRoutingModule { }
