import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { DigitalServicesComponent } from './digital-services/digital-services.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ZeroComponent } from './zero/zero.component';
import { TeamComponent } from './team/team.component';
import { TestComponent } from './test/test.component';
import { RestComponent } from './rest/rest.component';
import { SayComponent } from './say/say.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhatWeDoComponent,
    DigitalServicesComponent,
    WhoWeAreComponent,
    ZeroComponent,
    TeamComponent,
    TestComponent,
    RestComponent,
    SayComponent,
    RecentPostsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
