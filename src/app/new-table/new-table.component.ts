import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss']
})
export class NewTableComponent implements OnInit {
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  temp = [];

  columns = [
    { name: 'Name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];

  types = [
    { value: 'Male', name: 'Male' },
    { value: 'Female', name: 'Female' }
  ];
  messages = {
    emptyMessage: 'qq',
    totalMessage: 'total'
  };

  // @ViewChild(DatatableComponent) table: DatatableComponent;

  ngOnInit() {

  }

  constructor() {
    this.temp = this.rows;

  }

  test(event) {
    const val = event.value.toLowerCase();
    // filter our data
    const temp = _.filter(this.temp, function (d) {
      return d.gender.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  clickme(row) {
    console.log(row);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = _.filter(this.temp, function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    console.log(temp);

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }
}
