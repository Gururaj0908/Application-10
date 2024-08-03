import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [

  {
    path:'user', component:UserComponent, 
    children:[
      {path:'payment', component:PaymentComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
