import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealEstateComponent } from './real-estate.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'real-estate', component:RealEstateComponent, 
    children:[
      {path:'header', component:HeaderComponent},
      {path:'home', component:HomeComponent},
      { path: 'user', loadChildren: () => import('../../app/real-estate/user/user.module').then(m => m.UserModule)},
      {path:'', redirectTo:'/real-estate/home', pathMatch:'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateRoutingModule { }
