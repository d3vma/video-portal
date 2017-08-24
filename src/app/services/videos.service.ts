import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment as ENV } from '../../environments/environment';
import { SharedService } from './shared.service';

@Injectable()
export class VideosService {

  constructor(
    private http: Http,
    private sharedService: SharedService
  ) { }

  all(): Observable<any> {

    let sessionId = this.sharedService.sessionId();

    let params: URLSearchParams = new URLSearchParams();
    params.set('sessionId', sessionId);

    return this.http.get(ENV.api_url + '/videos', { search: params })
           .map(this.extractData).catch(this.handleError);

  }

  video(id): Observable<any> {
    let sessionId = this.sharedService.sessionId();

    return this.http.get(ENV.api_url + `/video?sessionId=${sessionId}` + '&videoId=' + id)
          .map(this.extractData)
          .catch(this.handleError);
  }

  rate(id, rating): Observable<any> {
    let sessionId = this.sharedService.sessionId();

    let data = {
      videoId: id,
      rating: rating
    }

    return this.http.post(ENV.api_url + `/video/ratings/?sessionId=${sessionId}`, data)
          .map(this.extractData)
          .catch(this.handleError);
  }

  // Rate videos and get the averege of data.
  rating(ratings) {
    if(!ratings) {
      return 0;
    }
    if(ratings.length <= 0) {
      return 0;
    }
    return ratings.reduce( (a, b) => a + b , 0 ) / ratings.length;
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
