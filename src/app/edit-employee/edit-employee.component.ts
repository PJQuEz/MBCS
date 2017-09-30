import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { EMPLOYEE } from '../data';
import { DataService } from '../data.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
const NAME_REGEX = /^[a-zA-Z0-9.-\s]*$/;
const NUMBER_REGEX = /^[0-9.]*$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^[0-9]{10}/;


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  id: number;
  data: any;
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
  p = {
    'name': '',
    'type': '',
    'surname': '',
    'email': '',
    'telephone': '',
    'role': ''
  };
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {

  }

  ngOnInit() {
    this.getData();

  }

  getData() {
    console.log('q');

    this.route.params.forEach((param: Params) => {
      this.id = param['id'];
      this.data = EMPLOYEE[this.id];
      console.log(this.data);
      this.img2 = this.data.picture;
      this.p.name = this.data.name;
      this.p.type = this.data.type;
      this.p.surname = this.data.surname;
      this.p.email = this.data.email;
      this.p.telephone = this.data.telephone;
      this.p.role = this.data.role;





    });
    // console.log(ss);

  }
  edit() {

    this.dataService.setEmployee(this.id, {
      picture: this.img2, name: this.p.name, type: this.p.type, surname: this.p.surname, email: this.p.email, telephone: this.p.telephone, role: this.p.role
    });

    this.router.navigate(['employee']);
  }

}
