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
  p = {
    'name': '',
    'type': '',
    'surname': '',
    'email': '',
    'telephone': '',
    'role': ''
  };
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }
  test333(event) {
    let file = event.target.files[0];
    let fileName = file.name;
    this.img2 = file.name;
    console.log(fileName);
  }
  edit() {

    this.dataService.addEmployee({
      picture: this.img2, name: this.p.name, type: this.p.type, surname: this.p.surname, email: this.p.email, telephone: this.p.telephone, role: this.p.role
    });

    this.router.navigate(['employee']);
  }

}
