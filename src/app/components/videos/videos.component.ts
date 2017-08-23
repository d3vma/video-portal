import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';
import { VideosService } from '../../services/videos.service';
import { TruncateModule } from 'ng2-truncate';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  public user;

  public error = '';

  public loading = false;

  public videos = [];

  constructor(
    private authService: AuthService,
    private sharedService: SharedService,
    private videosService: VideosService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.user = this.sharedService.userProfile();

    this.videosService.all().subscribe(
     res => {
       this.videos = res.data;
       this.loading = false;
       console.log(this.videos);
     },
     err => {
       this.error = err;
       this.loading = false;
     }
    );
  }

  logout() {
    localStorage.removeItem("sessionId");
    localStorage.removeItem("username");
    this.router.navigate(["/login"]);
  }

}
