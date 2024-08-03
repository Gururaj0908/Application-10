import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisaServiceRoutingModule } from './visa-service-routing.module';
import { VisaServiceComponent } from './visa-service.component';

import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    VisaServiceComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    VisaServiceRoutingModule,
    MaterialModule,
    UserModule
  ],
  exports:[HeaderComponent]
})
export class VisaServiceModule { }
