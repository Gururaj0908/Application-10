import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { FactCheckComponent } from './fact-check/fact-check.component';
import { LifeStyleComponent } from './life-style/life-style.component';
import { TechnologyComponent } from './technology/technology.component';
import { LiveTvComponent } from './tv/live-tv/live-tv.component';
import { VideosComponent } from './videos/videos.component';
import { InsightComponent } from './magazine/insight/insight.component';
import { LatestEditionComponent } from './magazine/latest-edition/latest-edition.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  {
    path:'blog', component:BlogComponent, 
    children:[
      {path:'create-project', component:CreateBlogComponent},
      {path:'header', component:HeaderComponent},
      {path:'home', component:HomeComponent},
      {path:'business', component:BusinessComponent},
      {path:'fact-check', component:FactCheckComponent},
      {path:'life-style', component:LifeStyleComponent},
      {path:'insight', component:InsightComponent},
      {path:'latest-edition', component:LatestEditionComponent},
      {path:'technology', component:TechnologyComponent},
      {path:'live-tv', component:LiveTvComponent},
      {path:'videos', component:VideosComponent},
      {path:'subscribe', component:SubscribeComponent},

      {path:'', redirectTo:'/home', pathMatch:'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
