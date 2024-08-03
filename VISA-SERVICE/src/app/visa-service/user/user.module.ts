import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { UploadPassportComponent } from './upload-passport/upload-passport.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MaterialModule } from '../../material.module';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [
    UserComponent,
    UploadPhotoComponent,
    UploadPassportComponent,
    DashboardComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    HeaderComponent
  ]
})
export class UserModule { }
