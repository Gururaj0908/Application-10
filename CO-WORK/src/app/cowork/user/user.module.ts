import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PaymentComponent } from './payment/payment.component';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [
    UserComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
