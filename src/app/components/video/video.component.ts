import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';
import { VideosService } from '../../services/videos.service';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  public user;

  public error = '';

  public loading = false;

  public video = [];

  public videos = [];

  public id: any;

  constructor(
    private authService: AuthService,
    private sharedService: SharedService,
    private videosService: VideosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastyService:ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = 'bootstrap';
  }

  ngOnInit() {
    this.loading = true;
    this.user = this.sharedService.userProfile();
    this.id = this.activatedRoute.snapshot.params["id"];

    // Get the video data by ID(from activated route)
    this.videosService.video(this.id).subscribe(
     res => {
       this.video = res.data;
       this.video['rating'] = this.videosService.rating(res.data.ratings);
       this.loading = false;
       console.log(this.video);
     },
     err => {
       this.error = err;
       this.loading = false;
     }
    );

    this.videosService.all().subscribe(
     res => {
       this.videos = res.data;
       this.loading = false;
     },
     err => {
       this.error = err;
       this.loading = false;
     }
    );
  }

  // Rating video function
  rateVideo(rating) {
    console.log('ee', rating);
    this.videosService.rate(this.id, rating).subscribe(
      res => {
        this.toastyService.success('Thank you for your rating!');
        this.loading = false;
     },
     err => {
       this.error = err;
       this.toastyService.error(this.error);
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
