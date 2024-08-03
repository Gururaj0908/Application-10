import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MaterialModule } from '../../material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RealEstateModule } from "../real-estate.module";


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    PaymentComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    RealEstateModule
]
})
export class UserModule { }
