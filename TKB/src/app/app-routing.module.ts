import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TkbModule } from './tkb/tkb.module';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'tkb', loadChildren:() => import('../app/tkb/tkb.module').then(m => m.TkbModule)},
  { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)},
  { path:'', redirectTo:'/login' , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
