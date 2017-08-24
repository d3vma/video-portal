import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { VideosService } from './videos.service';
import { SharedService } from './shared.service';

describe('VideosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: Http,
          deps: [MockBackend]
        },
        VideosService,
        SharedService
      ],
    });
  });

  it('should ...', inject([VideosService], (service: VideosService) => {
    expect(service).toBeTruthy();
  }));
});
