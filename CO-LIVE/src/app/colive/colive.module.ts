import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColiveRoutingModule } from './colive-routing.module';
import { ColiveComponent } from './colive.component';

import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { UserModule } from './user/user.module';
import { ContactUsComponent } from './contact-us/contact-us.component';




@NgModule({
  declarations: [
    ColiveComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ColiveRoutingModule,
    MaterialModule,
    UserModule
  ],
  exports:[HeaderComponent],

})
export class ColiveModule { }
