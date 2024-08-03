import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoworkRoutingModule } from './cowork-routing.module';
import { CoworkComponent } from './cowork.component';

import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    CoworkComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    CoworkRoutingModule,
    MaterialModule,
    UserModule
  ],
  exports:[HeaderComponent],

})
export class CoworkModule { }
