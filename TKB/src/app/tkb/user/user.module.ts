import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { MaterialModule } from '../../material.module';
import { ProfileComponent } from './profile/profile.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';


@NgModule({
  declarations: [
    UserComponent,
    CreatePostComponent,
    ProfileComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
