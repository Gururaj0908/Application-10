import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboadrdComponent } from './dashboadrd/dashboadrd.component';

const routes: Routes = [
  {
    path:'admin', component:AdminComponent,
    children:[
      {path:'dashboard', component:DashboadrdComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
