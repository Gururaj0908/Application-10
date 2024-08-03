import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { MaterialModule } from '../material.module';
import { DashboadrdComponent } from './dashboadrd/dashboadrd.component';
import { RealEstateModule } from "../real-estate/real-estate.module";





@NgModule({
  declarations: [
    AdminComponent,
    DashboadrdComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    RealEstateModule
]
})
export class AdminModule { }
