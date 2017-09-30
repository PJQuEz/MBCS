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




@Component({
  selector: 'app-manage-branch-manager',
  templateUrl: './manage-branch-manager.component.html',
  styleUrls: ['./manage-branch-manager.component.scss']
})
export class ManageBranchManagerComponent implements OnInit {
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
  constructor(private dataService: DataService, private router: Router) { }

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

  }
  test333(event) {
    let file = event.target.files[0];
    let fileName = file.name;
    this.img2 = file.name;
    console.log(fileName);
  }
  edit() {

    this.dataService.addBRANCHMENAGER({
      picture: this.img2, name: this.p.name, type: this.p.type, surname: this.p.surname, email: this.p.email, telephone: this.p.telephone, branch: this.p.branch
    });
    this.dataService.setbBRANCH(2, this.p.name);
    this.router.navigate(['branchmanager']);
  }

}
