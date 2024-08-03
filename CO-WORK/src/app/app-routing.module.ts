import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)},
  { path: 'co-work', loadChildren: () => import('../app/cowork/cowork.module').then(m => m.CoworkModule)},
  { path:'', redirectTo:'/co-work/home' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
