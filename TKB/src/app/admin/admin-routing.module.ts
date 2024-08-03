import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateCommunityComponent } from './community/create-community/create-community.component';
import { UpdateCommunityComponent } from './community/update-community/update-community.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'admin', component:AdminComponent, 
    children:[
      {path:'create-community', component:CreateCommunityComponent},
      {path:'update-community', component:UpdateCommunityComponent},
      {path:'dashboard', component:DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
