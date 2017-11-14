import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { EMPLOYEE } from '../data';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  rows: any;
  searchSelect = '';
  search = '';
  type2 = '';
  temp = [];

  messages = {
    emptyMessage: 'Not Matching data',
    totalMessage: 'total'
  };

  columns = [
    { name: 'picture' },
    { name: 'Name' },
    { name: 'Surname' },
    { name: 'Email' },
    { name: 'Telephone' },
    { name: 'Role' }
  ];

  constructor(private dataService: DataService, private router: Router) {
    this.rows = dataService.getEmployee();

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
        return res.type.indexOf(val) !== -1;
      });
      temp = _.filter(Tempdata, (res) => {
        return res.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.surname.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.email.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.telephone.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.role.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || !this.search.toLowerCase();
      });
    } else {
      temp = _.filter(this.temp, (res) => {
        return res.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
        || res.surname.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
        || res.email.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
        || res.telephone.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
        || res.role.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || !this.search.toLowerCase();
      });
    }
    this.rows = temp;

  }
  addss() {
    console.log(this.rows);
  }
  edit(row) {

    this.router.navigate(['/payment/list', EMPLOYEE.indexOf(row)]);
    console.log(row);
  }

  delete(row) {
    this.dataService.deleteEmployee(EMPLOYEE.indexOf(row));
  }
}
