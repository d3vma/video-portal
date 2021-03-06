import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class SharedService {

  constructor(
    private router: Router
  ) { }

  // Return SessionID from localstorage.
  sessionId() {
    return localStorage.getItem('sessionId');
  }

  // Return Username from localstorage.
  userProfile() {
    return localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem("sessionId");
    localStorage.removeItem("username");
    this.router.navigate(["/login"]);
  }

}
