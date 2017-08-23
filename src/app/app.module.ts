import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TruncateModule } from 'ng2-truncate';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { RatingModule } from "ngx-rating";
import { Md5 } from 'ts-md5/dist/md5';
import { ToastyModule } from 'ng2-toasty';

import { AuthService } from './services/auth.service';
import { VideosService } from './services/videos.service';
import { SharedService } from './services/shared.service';

import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideosComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TruncateModule,
    InfiniteScrollModule,
    RatingModule,
    ToastyModule.forRoot()
  ],
  providers: [
    AuthService,
    SharedService,
    VideosService,
    AuthGuard,
    NotAuthGuard,
    Md5
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
