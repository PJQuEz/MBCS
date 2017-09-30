import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MENUS } from '../data';

@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.scss']
})

export class TableMenuComponent implements OnInit {
  rows: any;
  searchSelect = '';
  search = '';
  type2 = '';
  temp = [];

  messages = {
    emptyMessage: 'Not Matching data',
    totalMessage: 'total'
  };

  types = [
    { value: '', name: 'All' },
    { value: 'Brewing', name: 'Brewing' },
    { value: 'Non-brewing', name: 'Non-brewing' }
  ];

  columns = [
    { name: 'picture' },
    { name: 'Name' },
    { name: 'Type' },
    { name: 'Price' },
    { name: 'Cost' }
  ];

  constructor(private dataService: DataService, private router: Router) {
    this.rows = dataService.getMenu();

  }

  ngOnInit() {
    this.temp = this.rows;
  }

  searchFilter() {
    let Tempdata: any[];
    let temp = [];
    console.log(this.searchSelect);
    if (this.searchSelect !== '') {
      const val = this.searchSelect;
    console.log(this.temp);
      Tempdata = _.filter(this.temp, (res) => {
    console.log(res);
            return res.type.indexOf(val) !== -1 ;
      });
      temp = _.filter(Tempdata, (res) => {
        return res.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.type.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.price.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.cost.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || !this.search.toLowerCase();
      });
    } else {
      temp = _.filter(this.temp, (res) => {
        return res.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.type.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.price.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.cost.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || !this.search.toLowerCase();
      });
    }
    this.rows = temp;

  }
  addss() {
    console.log(this.rows);
  }
  edit(row) {

    this.router.navigate(['/menu/edit', MENUS.indexOf(row)]);
    console.log(this.rows);
  }

  delete(row) {
    this.dataService.deleteMenu(MENUS.indexOf(row));
  }
}
