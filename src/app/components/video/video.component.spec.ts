import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, HttpModule, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { VideoComponent } from './video.component';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';
import { VideosService } from '../../services/videos.service';

import { ToastyModule } from 'ng2-toasty';
import { RatingModule } from "ngx-rating";
import { TruncateModule } from 'ng2-truncate';
import { Md5 } from 'ts-md5/dist/md5';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        RatingModule,
        TruncateModule,
        ToastyModule.forRoot()
      ],
      declarations: [ VideoComponent ],
      providers: [
        {
          provide: Http,
          deps: [MockBackend]
        },
        AuthService,
        SharedService,
        VideosService,
        Md5
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
