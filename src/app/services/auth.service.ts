import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { environment as ENV } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(
    private http: Http,
    private router: Router
  ) { }


  isLoggedIn() {
    return localStorage.getItem("sessionId") == null  ? false : true ;
  }

  authenticateUser(user): Observable<any> {
    return this.http.post(ENV.api_url + '/user/auth', user)
                     .map(this.extractData)
                     .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg;
    const body = error.json() || '';
    errMsg = body.message || JSON.stringify(body);
    console.error('Http Error', errMsg);
    return Observable.throw(errMsg);
  }

}
