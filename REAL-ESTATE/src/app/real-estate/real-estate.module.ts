import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstateRoutingModule } from './real-estate-routing.module';
import { RealEstateComponent } from './real-estate.component';

import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    RealEstateComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RealEstateRoutingModule,
    MaterialModule,
    UserModule
  ],
  exports:[HeaderComponent]
})
export class RealEstateModule { }
