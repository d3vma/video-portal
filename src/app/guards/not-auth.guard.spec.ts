import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AuthService } from '../services/auth.service';
import { NotAuthGuard } from './not-auth.guard';

import { Md5 } from 'ts-md5/dist/md5';

describe('NotAuthGuard', () => {
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
        AuthService,
        NotAuthGuard,
        Md5
      ]
    });
  });

  it('should ...', inject([NotAuthGuard], (guard: NotAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
