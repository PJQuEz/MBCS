import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { INGREDIENT } from '../data';
import { DataService } from '../data.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
const NAME_REGEX = /^[a-zA-Z0-9.-\s]*$/;
const NUMBER_REGEX = /^[0-9.]*$/;

@Component({
  selector: 'app-edit-ingredient',
  templateUrl: './edit-ingredient.component.html',
  styleUrls: ['./edit-ingredient.component.scss']
})
export class EditIngredientComponent implements OnInit {
  id: number;
  data: any;
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NAME_REGEX)]);

  numberFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NUMBER_REGEX)]);

  types = [
    { value: 'Normal', name: 'Normal' },
    { value: 'High', name: 'High' },
    { value: 'Premium', name: 'Premium' }
  ];
  p = {
    'name': '',
    'type': '',
    'cost': ''
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
      this.data = INGREDIENT[this.id];
      console.log(this.data);
      this.p.type = this.data.type;
      this.p.name = this.data.name;
      this.p.cost = this.data.cost;



    });
    // console.log(ss);

  }
  edit() {

    this.dataService.setIngredient(this.id, {
      name: this.p.name, type: this.p.type, cost: this.p.cost
    });

    this.router.navigate(['ingredient']);
  }

}
