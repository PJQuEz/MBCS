import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { MENUS } from '../data';
import { DataService } from '../data.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
const NAME_REGEX = /^[a-zA-Z0-9.-\s]*$/;
const NUMBER_REGEX = /^[0-9.]*$/;

@Component({
  selector: 'app-manage-ingredient',
  templateUrl: './manage-ingredient.component.html',
  styleUrls: ['./manage-ingredient.component.scss']
})
export class ManageIngredientComponent implements OnInit {
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
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  edit() {

    this.dataService.addIngredient({
      name: this.p.name, type: this.p.type, cost: this.p.cost
    });

    this.router.navigate(['ingredient']);
  }

}
