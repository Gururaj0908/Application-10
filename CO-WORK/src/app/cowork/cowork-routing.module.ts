import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CoworkComponent } from './cowork.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path:'co-work', component:CoworkComponent, 
    children:[
      {path:'header', component:HeaderComponent},
      {path:'home', component:HomeComponent},
      {path:'footer', component:FooterComponent},
      {path:'contact-us', component:ContactUsComponent},

      { path: 'user', loadChildren: () => import('../../app/cowork/user/user.module').then(m => m.UserModule)},

      {path:'', redirectTo:'/co-work/home', pathMatch:'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoworkRoutingModule { }
