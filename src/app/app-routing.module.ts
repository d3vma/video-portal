import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoComponent } from './components/video/video.component';

import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';

const routes: Routes = [
  { path: '', redirectTo:"/", pathMatch:"full" },
  { path: 'login', component: LoginComponent, canActivate:[NotAuthGuard]},
  { path: '', component: VideosComponent, canActivate:[AuthGuard]},
  { path: 'v/:id', component: VideoComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
