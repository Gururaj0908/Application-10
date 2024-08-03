import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TkbRoutingModule } from './tkb-routing.module';
import { TkbComponent } from './tkb.component';

import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    TkbComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    TkbRoutingModule,
    MaterialModule,
    UserModule
  ],
  exports:[HeaderComponent]
})
export class TkbModule { }
