import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { BRANCH } from '../data';
import { DataService } from '../data.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
const NAME_REGEX = /^[a-zA-Z0-9.-\s]*$/;
const NUMBER_REGEX = /^[0-9.]*$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^[0-9]{10}/;
import { BRANCHMENAGER } from '../data';


@Component({
  selector: 'app-edit-branch-manage',
  templateUrl: './edit-branch-manage.component.html',
  styleUrls: ['./edit-branch-manage.component.scss']
})
export class EditBranchManageComponent implements OnInit {
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



  types;
  img2;
  p = {
    'name': '',
    'type': '',
    'surname': '',
    'email': '',
    'telephone': '',
    'branch': ''
  };
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    if (BRANCH.length === 3) {
      this.types = [
        { value: BRANCH[0].name, name: BRANCH[0].name },
        { value: BRANCH[1].name, name: BRANCH[1].name },
        { value: BRANCH[2].name, name: BRANCH[2].name }];
    }
    else {
      this.types = [
        { value: BRANCH[0].name, name: BRANCH[0].name },
        { value: BRANCH[1].name, name: BRANCH[1].name }];
    }
    this.getData();


  }

  getData() {
    console.log('q');

    this.route.params.forEach((param: Params) => {
      this.id = param['id'];
      this.data = BRANCHMENAGER[this.id];
      console.log(this.data);
      this.img2 = this.data.picture;
      this.p.name = this.data.name;
      this.p.type = this.data.type;
      this.p.surname = this.data.surname;
      this.p.email = this.data.email;
      this.p.telephone = this.data.telephone;
      this.p.branch = this.data.branch;





    });
    // console.log(ss);

  }
  test333(event) {
    let file = event.target.files[0];
    let fileName = file.name;
    this.img2 = file.name;
    console.log(fileName);
  }
  edit() {

    this.dataService.setBRANCHMENAGER(this.id, {
      picture: this.img2, name: this.p.name, type: this.p.type, surname: this.p.surname, email: this.p.email, telephone: this.p.telephone, branch: this.p.branch
    });
    this.dataService.setbBRANCH(this.id, this.p.name);
    this.router.navigate(['branchmanager']);
  }

}
