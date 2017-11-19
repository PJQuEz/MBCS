import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class IngredientService {

  constructor(
    private authHttp: AuthHttp,
    @Inject('AppConfig') private config: any
  ) { }

  all() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(this.config.apiEndpoints.ingredient).subscribe((res: any) => {
        if (res.status === 200) {
          let ingredients = JSON.parse(res._body);
          resolve(ingredients);
        } else {
          reject({});
        }
      });
    });
  }

  get(id) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(this.config.apiEndpoints.ingredient + '/' + id).subscribe((res: any) => {
        let places = JSON.parse(res._body);
        resolve(places);
      });
    });
  }

  create(ingredient) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(this.config.apiEndpoints.ingredient, ingredient).subscribe((res: any) => {
        console.log(res);
        if (res.status === 200) {
          let ingredients = JSON.parse(res._body);
          resolve(ingredients);
        } else {
          reject({
            'text': 'message'
          });
        }
      });
    });
  }
  update(id, ingredient) {
    return new Promise((resolve, reject) => {
      this.authHttp.put(this.config.apiEndpoints.ingredient + '/' + id, ingredient).subscribe((res: any) => {
        console.log(res);
        if (res.status === 200) {
          let ingredient = JSON.parse(res._body);
          resolve(ingredient);
        } else {
          reject({
            'text': 'message'
          });
        }
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this.authHttp.delete(this.config.apiEndpoints.ingredient + '/' + id).subscribe((res: any) => {
        let ingredient = JSON.parse(res._body);
        resolve(ingredient);
      });
    });
  }
}
