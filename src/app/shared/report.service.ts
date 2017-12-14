import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class ReportService {

  constructor(
    private authHttp: AuthHttp,
    @Inject('AppConfig') private config: any
  ) { }

  selling(sTime, eTime) {
    return new Promise((resolve, reject) => {
      this.authHttp.get('http://139.59.231.135/posrest/public/api/profiling/1').subscribe((res: any) => {
        if (res.status === 200) {
          let places = JSON.parse(res._body);
          resolve(places);
        } else {
          reject({});
        }
      });
    });
  }
  barista(user, sTime, eTime) {
    return new Promise((resolve, reject) => {
      this.authHttp.get('http://192.168.1.113:8000/api/report/selling/' + user + '/' + sTime + '/' + eTime).subscribe((res: any) => {
        if (res.status === 200) {
          let places = JSON.parse(res._body);
          resolve(places);
        } else {
          reject({});
        }
      });
    });
  }
}
