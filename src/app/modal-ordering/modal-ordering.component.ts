import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SELECTED } from '../data';

@Component({
  selector: 'app-modal-ordering',
  templateUrl: './modal-ordering.component.html',
  styleUrls: ['./modal-ordering.component.scss']
})
export class ModalOrderingComponent implements OnInit {
  data: any;
  data2;
  orderDetails: any;
  selectedItem: any;
  rows: any;
  Q: any;
  name;

  constructor(
    private dialogRef: MdDialogRef<any>,
    private dataService: DataService, private router: Router,
    ) { this.rows = dataService.getSELECTED(); }

  ngOnInit() {
    this.initializeItems();
    console.log(this.data)
  }
  initializeItems() {
    //Default value
    if (!this.data2) {
      this.orderDetails = {
        amount: 1,
        grade: 'normal',
        sweet: 'normal',
        price: '',
        total: 0
      };
    }
    else {
    this.orderDetails = {
      amount: this.data2.amount,
      grade: this.data2.grade,
      sweet: this.data2.sweet,
      price: this.data2.price
    }
    }

  }
  onNoClick() {

    this.dialogRef.close();
  }

  add() {

    this.dataService.addSELECTED({
      name: this.data.name, grade: this.orderDetails.grade, sweet: this.orderDetails.sweet, price: this.data.price, amount: this.orderDetails.amount
    });

    this.dialogRef.close();
  }
  edit() {

    this.dataService.setSELECTED(SELECTED.indexOf(this.data2), {
      name: this.data2.name, grade: this.orderDetails.grade, sweet: this.orderDetails.sweet, price: this.data2.price, amount: this.orderDetails.amount
    });
    this.dialogRef.close();

  }

  submitModal() {
    let item = {};
    item = this.selectedItem;
    item['orderDetails'] = this.orderDetails;

    this.dialogRef.close();
  }
}
