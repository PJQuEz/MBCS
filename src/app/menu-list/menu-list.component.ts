import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ModalOrderingComponent } from '../modal-ordering/modal-ordering.component';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MENUS } from '../data';
import * as _ from 'lodash';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  dialogRef: MdDialogRef<ModalOrderingComponent>;
  rows: any;
  search = '';
  searchSelect = '';
  temp = [];
  types = [
    { value: '', name: 'All' },
    { value: 'Brewing', name: 'Brewing' },
    { value: 'Non-brewing', name: 'Non-brewing' }
  ];
    constructor(
      public dialog: MdDialog,private dataService: DataService, private router: Router
    ) { 
      this.rows = dataService.getMenu();
    }

  ngOnInit() {
    this.temp = this.rows;
  }

  // selectProduct(item) {
  //   console.log(item);
  // }
  selectProduct(i) {
    this.dialogRef = this.dialog.open(ModalOrderingComponent, {
      disableClose: false,
      width: '50%'
    });this.dialogRef.componentInstance.data = i;
    this.dialogRef.componentInstance.Q = 1;

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
          || !this.search.toLowerCase();
      });
    } else {
      temp = _.filter(this.temp, (res) => {
        return res.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || res.type.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          || !this.search.toLowerCase();
      });
    }
    this.rows = temp;

  }

}
