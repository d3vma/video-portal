import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { environment as ENV } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(
    private http: Http,
    private router: Router,
    private md5: Md5
  ) { }


  // Check if user is logged in or not.
  isLoggedIn() {
    return localStorage.getItem("sessionId") == null  ? false : true ;
  }

  // Authenticate user and convert to MD5 hash.
  authenticateUser(user): Observable<any> {

    user.password = Md5.hashStr(user.password);

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
