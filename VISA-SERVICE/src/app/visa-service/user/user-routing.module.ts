import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UploadPassportComponent } from './upload-passport/upload-passport.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'user', component:UserComponent,
    children:[
      {path:'upload-passport', component:UploadPassportComponent},
      {path:'upload-photo', component:UploadPhotoComponent},
      {path:'dashboard', component:DashboardComponent},
      {path:'payment', component:PaymentComponent}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
