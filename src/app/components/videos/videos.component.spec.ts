import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { VideosComponent } from './videos.component';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';
import { VideosService } from '../../services/videos.service';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { TruncateModule } from 'ng2-truncate';
import { Md5 } from 'ts-md5/dist/md5';

describe('VideosComponent', () => {
  let component: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        InfiniteScrollModule,
        TruncateModule
      ],
      declarations: [ VideosComponent ],
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
    fixture = TestBed.createComponent(VideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});
