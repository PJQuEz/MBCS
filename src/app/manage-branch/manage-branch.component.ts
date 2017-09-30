import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { BRANCH } from '../data';
import { DataService } from '../data.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
const NAME_REGEX = /^[a-zA-Z0-9.-\s]*$/;
const NUMBER_REGEX = /^[0-9.]*$/;

@Component({
  selector: 'app-manage-branch',
  templateUrl: './manage-branch.component.html',
  styleUrls: ['./manage-branch.component.scss']
})
export class ManageBranchComponent implements OnInit {
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NAME_REGEX)]);

  nameFormControl2 = new FormControl('', [
    Validators.required,
    Validators.pattern(NAME_REGEX)]);

  numberFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NUMBER_REGEX)]);


  p = {
    'name': '',
    'address': '',
    'manager': ''
  };

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  edit() {

    this.dataService.addBRANCH({
      name: this.p.name, address: this.p.address, manager: this.p.manager
    });

    this.router.navigate(['branch']);
  }

}
