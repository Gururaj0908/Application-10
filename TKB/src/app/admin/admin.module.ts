import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { MaterialModule } from '../material.module';
import { CreateCommunityComponent } from './community/create-community/create-community.component';
import { TkbModule } from "../tkb/tkb.module";
import { UpdateCommunityComponent } from './community/update-community/update-community.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AdminComponent,
    CreateCommunityComponent,
    UpdateCommunityComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    TkbModule
]
})
export class AdminModule { }
