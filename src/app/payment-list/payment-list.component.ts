import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CLOCK } from '../data';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ModalOrderingComponent } from '../modal-ordering/modal-ordering.component';
import { ModalPaymentComponent } from '../modal-payment/modal-payment.component'
import { ModalPTpaymentComponent } from '../modal-ptpayment/modal-ptpayment.component'


@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
  dialogRef: MdDialogRef<ModalPTpaymentComponent>;
  dialogRef2: MdDialogRef<ModalPTpaymentComponent>;
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
    { name: 'ClockInTime' },
    { name: 'ClockOutTime' },
    { name: 'Payment' },
    { name: 'Duration' },
    { name: 'total' }
  ];

  constructor(public dialog: MdDialog,private dataService: DataService, private router: Router) {
    this.rows = dataService.getCLOCK();

  }

  ngOnInit() {
    this.temp = this.rows;
  }

  
  edit(row) {

    this.router.navigate(['/employee/edit', CLOCK.indexOf(row)]);
    console.log(row);
  }
test(s){
  console.log(s);
}
test2(s){
  console.log(s);
}
openDialog1() {
  
      this.dialogRef = this.dialog.open(ModalPTpaymentComponent, {
        disableClose: false,
        width: '50%',
      });; 
      this.dialogRef.componentInstance.Q = 1;
      
    }
openDialog2() {
  
      this.dialogRef2 = this.dialog.open(ModalPTpaymentComponent, {
        disableClose: false,
        width: '50%',
      });; 
      this.dialogRef2.componentInstance.Q = 2;
      
    }
}
