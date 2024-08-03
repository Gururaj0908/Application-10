import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  
  {
    path:'user', component:UserComponent, 
    children:[
      {path:'create-post', component:CreatePostComponent},
      {path:'user-profile', component:ProfileComponent},
      {path:'terms-and-conditions', component:CreatePostComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
