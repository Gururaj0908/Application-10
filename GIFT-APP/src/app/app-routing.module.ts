import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)},
  { path: 'gift', loadChildren: () => import('../app/gift/gift.module').then(m => m.GiftModule)},
  { path:'', redirectTo:'/gift/home' , pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
