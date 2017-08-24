import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Http, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Md5 } from 'ts-md5/dist/md5';

import { AuthService } from './services/auth.service';
import { SharedService } from './services/shared.service';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
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
        SharedService,
        Md5
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
