import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SELECTED } from '../data';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ModalOrderingComponent } from '../modal-ordering/modal-ordering.component';
import { ModalPaymentComponent } from '../modal-payment/modal-payment.component'
@Component({
  selector: 'app-selected-menu',
  templateUrl: './selected-menu.component.html',
  styleUrls: ['./selected-menu.component.scss']
})
export class SelectedMenuComponent implements OnInit {
  dialogRef: MdDialogRef<ModalOrderingComponent>;
  dialogRef2: MdDialogRef<ModalPaymentComponent>;
  
  total = 0;
  rows: any;
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  constructor(public dialog: MdDialog, private dataService: DataService, private router: Router) { this.rows = dataService.getSELECTED(); this.getTotal(); }
  ngOnInit() {
  }

  delete(row) {
    this.dataService.deleteSELECTED(SELECTED.indexOf(row));
  }
  openDialog(i) {
    console.log(i);
    this.dialogRef = this.dialog.open(ModalOrderingComponent, {
      disableClose: false,
      width: '50%',
    });; this.dialogRef.componentInstance.data2 = i;
    this.dialogRef.componentInstance.Q = 2;


  }
  getTotal() :number{
    let q;
    _.forEach(this.rows, (value) => {
      console.log(value.price);
      q += (value.price * value.amount);
    });
    console.log(q);
    return q;
  }
  openDialog2() {

    this.dialogRef2 = this.dialog.open(ModalPaymentComponent, {
      disableClose: false,
      width: '50%',
    });; 
    this.dialogRef2.componentInstance.total = 120;
    
  }
}
