import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

import { MaterialModule } from '../material.module';
import { CreateBlogComponent } from './create-blog/create-blog.component';

import { UserProfileModule } from './user-profile/user-profile.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LanguageService } from '../services/language.service';
import { LatestEditionComponent } from './magazine/latest-edition/latest-edition.component';
import { InsightComponent } from './magazine/insight/insight.component';
import { LiveTvComponent } from './tv/live-tv/live-tv.component';
import { PrimeTimesComponent } from './tv/prime-times/prime-times.component';
import { LifeStyleComponent } from './life-style/life-style.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { VideosComponent } from './videos/videos.component';
import { FactCheckComponent } from './fact-check/fact-check.component';
import { SubscribeComponent } from './subscribe/subscribe.component';




@NgModule({
  declarations: [
    BlogComponent,
    CreateBlogComponent,
    HeaderComponent,
    HomeComponent,
    LatestEditionComponent,
    InsightComponent,
    LiveTvComponent,
    PrimeTimesComponent,
    LifeStyleComponent,
    BusinessComponent,
    TechnologyComponent,
    VideosComponent,
    FactCheckComponent,
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
    UserProfileModule
  ],
  exports:[HeaderComponent],


})
export class BlogModule { }
