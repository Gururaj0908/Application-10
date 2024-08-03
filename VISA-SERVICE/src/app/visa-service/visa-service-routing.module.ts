import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { VisaServiceComponent } from './visa-service.component';

const routes: Routes = [
  {
    path:'visa-service', component:VisaServiceComponent, 
    children:[
      {path:'header', component:HeaderComponent},
      {path:'home', component:HomeComponent},
      { path: 'user', loadChildren: () => import('../../app/visa-service/user/user.module').then(m => m.UserModule)},

      {path:'', redirectTo:'/visa-service/home', pathMatch:'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisaServiceRoutingModule { }
