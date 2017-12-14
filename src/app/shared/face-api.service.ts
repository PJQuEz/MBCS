import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Headers, Http } from '@angular/http';


@Injectable()
export class FaceAPIService {
  private urlTG = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/1/train';
  private urlGPS = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/1/persons';
  private urlCP = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/1/persons';
  private urlDT = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';
  private urlID = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/identify';
  private urlAF = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/group4/persons/dedbae10-7e95-475b-8590-b6c0079b5193/persistedFaces';
  private urlGP = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/group4/persons/dedbae10-7e95-475b-8590-b6c0079b5193';
  private headers = new Headers({ 'Ocp-Apim-Subscription-Key': 'a301690023ed4822ae1c694081349216' });
  constructor(
    private authHttp: AuthHttp,
    @Inject('AppConfig') private config: any) { }

  all() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(this.urlGPS, { headers: this.headers }).subscribe((res: any) => {
        if (res.status === 200) {
          let places = JSON.parse(res._body);
          resolve(places);
        } else {
          reject({});
        }
      });
    });
  }
  createPerson(parameter) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(this.urlCP, parameter, { headers: this.headers }).subscribe((res: any) => {
        if (res.status === 200) {
          let places = JSON.parse(res._body);
          resolve(places);
        } else {
          reject({});
        }
      });
    });
  }
  getPerson(id) {
    return new Promise((resolve, reject) => {
      this.authHttp.get('https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/1/persons/' + id, { headers: this.headers }).subscribe((res: any) => {
        if (res.status === 200) {
          let places = JSON.parse(res._body);
          resolve(places);
        } else {
          reject({});
        }
      });
    });
  }
  addFace(id, body) {
    return new Promise((resolve, reject) => {
      this.authHttp.post('https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/1/persons/' + id + '/persistedFaces', body, { headers: this.headers }).subscribe((res: any) => {
        if (res.status === 200) {
          let places = JSON.parse(res._body);
          resolve(places);
        } else {
          reject({});
        }
      });
    });
  }
  detect(body) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(this.urlDT, body, { headers: this.headers }).subscribe((res: any) => {
        if (res.status === 200) {
          let places = JSON.parse(res._body);
          resolve(places);
        } else {
          reject({});
        }
      });
    });
  }
  identify(body) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(this.urlID, body, { headers: this.headers }).subscribe((res: any) => {
        if (res.status === 200) {
          let places = JSON.parse(res._body);
          resolve(places);
        } else {
          reject({});
        }
      });
    });
  }
  trainGroup() {
    return new Promise((resolve, reject) => {
      this.authHttp.post(this.urlTG,  { headers: this.headers }).subscribe((res: any) => {
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
