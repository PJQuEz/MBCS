import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Headers, Http } from '@angular/http';


@Injectable()
export class FaceAPIService {
  private urlGP = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/group1/persons/';
  private urlDF = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';
  private url = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/group1/persons/dedbae10-7e95-475b-8590-b6c0079b5193';
  
  private headers = new Headers({ 'Ocp-Apim-Subscription-Key': '9fbd5a025b4446cbb8900549e9dd1761' });
  constructor(
    private authHttp: AuthHttp,
    @Inject('AppConfig') private config: any) { }

  all() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(this.url, { headers: this.headers }).subscribe((res: any) => {
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
