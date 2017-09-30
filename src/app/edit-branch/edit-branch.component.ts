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
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.scss']
})
export class EditBranchComponent implements OnInit {
  id: number;
  data: any;
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
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {

  }

  ngOnInit() {
    this.getData();

  }

  getData() {
    console.log('q');

    this.route.params.forEach((param: Params) => {
      this.id = param['id'];
      this.data = BRANCH[this.id];
      console.log(this.data);
      this.p.address = this.data.address;
      this.p.name = this.data.name;
      this.p.manager = this.data.manager;



    });
    // console.log(ss);

  }
  edit() {

    this.dataService.setBRANCH(this.id, {
      name: this.p.name, address: this.p.address, manager: this.p.manager
    });
    this.dataService. setbBRANCHMENAGER(this.id, this.p.name);
    this.router.navigate(['branch']);
  }

}
