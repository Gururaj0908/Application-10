import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColiveComponent } from './colive.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  
  {
    path:'co-live', component:ColiveComponent, 
    children:[
      {path:'contact-us', component:ContactUsComponent},
      {path:'header', component:HeaderComponent},
      {path:'home', component:HomeComponent},
      {path:'footer', component:FooterComponent},
      { path: 'user', loadChildren: () => import('../../app/colive/user/user.module').then(m => m.UserModule)},
      {path:'', redirectTo:'/co-live/home', pathMatch:'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColiveRoutingModule { }
