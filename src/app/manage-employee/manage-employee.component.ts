import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { MENUS } from '../data';
import { DataService } from '../data.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
const NAME_REGEX = /^[a-zA-Z0-9.-\s]*$/;
const NUMBER_REGEX = /^[0-9.]*$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^[0-9]{10}/;
import { IngredientService } from '../shared/ingredient.service';
import { FaceAPIService } from '../shared/face-api.service';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PHONE_REGEX)]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NAME_REGEX)]);

  nameFormControl2 = new FormControl('', [
    Validators.required,
    Validators.pattern(NAME_REGEX)]);

  numberFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NUMBER_REGEX)]);

  types = [
    { value: 'Part-time staff', name: 'Part-time staff' },
    { value: 'Cashier', name: 'Cashier' }
  ];
  img2;
  personID = '';
  aa: any;
  p = {
    'name': '',
    'type': '',
    'surname': '',
    'email': '',
    'telephone': '',
    'role': ''
  };
  constructor(private dataService: DataService, private router: Router,
    private http: Http,
    private ingredientService: IngredientService,
    private faceAPIService: FaceAPIService, ) { }

  ngOnInit() {
  }
  test333(event) {
    let file = event.target.files[0];
    let fileName = file.name;
    this.img2 = file.name;
    console.log(fileName);
  }
  edit() {
    this.cp();
    this.dataService.addEmployee({
      picture: this.img2, name: this.p.name, type: this.p.type, surname: this.p.surname, email: this.p.email, telephone: this.p.telephone,
      role: this.p.role, personId: this.personID
    });

    this.router.navigate(['employee']);
  }
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);
      let headers = new Headers();

      let options = new RequestOptions({ headers: headers });
      this.http.post(`http://139.59.231.135/posrest/public/api/image`, formData, options)
        .map((res) => { this.aa = JSON.parse(res['_body']); })
        .catch(error => Observable.throw(error))
        .subscribe(
        data => { this.img2 = this.aa.file_name },
        error => console.log(error)
        )
    }

  }
  cp() {
    let body = {
      "name": this.p.name,
      "userData": "User-provided data attached to the person"
    }
    this.faceAPIService.createPerson(body).then((res) => {
      this.personID = res['personId'];
      console.log(res['personId']);
      console.log('123');
      this.af();
    }, (error) => {
      console.log(error);
    });

  }
  af() {
    let body = {
      "url": "http://139.59.231.135/posrest/public/images/" + this.img2
    }
    console.log(body);

    this.faceAPIService.addFace('' + this.personID, body).then((res) => {
      console.log(res);
      // this.tg();

    }, (error) => {
      console.log(error);
    });
  }
  // tg() {
  //   this.faceAPIService.trainGroup().then((res) => {
  //     console.log(res);


  //   }, (error) => {
  //     console.log(error);
  //   });
  // }
  tg() {
    let headers = new Headers({ 'Ocp-Apim-Subscription-Key': '9fbd5a025b4446cbb8900549e9dd1761' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(`https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/group4/train`, options)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
      data => console.log('success'),
      error => console.log(error)
      )
    // this.faceAPIService.trainGroup().then((res) => {
    //   console.log(res);


    // }, (error) => {
    //   console.log(error);
    // });
  }

}
