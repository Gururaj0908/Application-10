import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftRoutingModule } from './gift-routing.module';
import { GiftComponent } from './gift.component';

import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    GiftComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    GiftRoutingModule,
    MaterialModule
  ],
  exports:[HeaderComponent]
})
export class GiftModule { }
