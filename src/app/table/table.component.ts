import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MENUS } from '../data';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() rows;
  @Input() columns: any;
  // // rows = [];
  // // columns = [];
  searchSelect = '';
  search = '';
  type2 = '';
  temp = [];

  messages = {
    emptyMessage: 'Not Matching data',
    totalMessage: 'total'
  };

  types = [
    { value: '', name: '' },
    { value: '2Male', name: '2Male' },
    { value: 'Female', name: 'Female' }
  ];


  // @ViewChild(DatatableComponent) table: DatatableComponent;

  ngOnInit() {
    this.temp = this.rows;

  }

  constructor(
    private dataService: DataService,
    private router: Router
  ) {

  }

  searchFilter() {
    let Tempdata: any[];
    let temp = [];
    console.log(this.searchSelect);
    if (this.searchSelect !== '') {
      const val = this.searchSelect.toLowerCase();
      Tempdata = _.filter(this.temp, (res) => {
        return res.gender.toLowerCase().indexOf(val) !== -1 || !val;
      });
      temp = _.filter(Tempdata, (res) => {
        return res.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          // || res.gender.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          // || res.company.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || !this.search.toLowerCase();
      });
    } else {
      temp = _.filter(this.temp, (res) => {
        return res.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.gender.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.company.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
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
