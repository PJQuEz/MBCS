import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class ImageService {
  private url = 'http://139.59.231.135/posrest/public/api/image';
  
  constructor(
    private authHttp: AuthHttp,
    @Inject('AppConfig') private config: any) { }

    upload(formData, options, id) {
    
    return new Promise((resolve, reject) => {
      this.authHttp.post(this.url, formData,options.headers).subscribe((res: any) => {
        console.log(res);
          if(res.status === 200) {
            let places = JSON.parse(res._body);
            resolve(places);
          } else {
            reject({
              'text': 'message'
            });
          }
      });
    });
  }
}
