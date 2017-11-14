import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { DataService } from '../data.service';
import { CLOCK } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-ptpayment',
  templateUrl: './modal-ptpayment.component.html',
  styleUrls: ['./modal-ptpayment.component.scss']
})
export class ModalPTpaymentComponent implements OnInit {
  data: any;
  data2;
  orderDetails: any;
  selectedItem: any;
  rows: any;
  Q: any;
  constructor(
    private dialogRef: MdDialogRef<any>, private dataService: DataService, private router: Router

  ) { this.orderDetails = {
    Payment: 1,
    Duration:1
  };}

  ngOnInit() {
  }
  onNoClick() {
    this.dialogRef.close();

  }
  onNoClick2() {
    this.dialogRef.close();
    window.location.reload();

  }
  edit1() {
    this.data = this.dataService.getCLOCKID(0);
    this.dataService.setCLOCK(0, {
      clockInTime: this.data.clockInTime, clockOutTime: this.data.clockInTime, payment: this.orderDetails.Payment, duration: this.data.duration, total: this.data.duration * this.orderDetails.Payment
    });
    this.rows= this.dataService.getCLOCKID(0);
    this.router.navigate(['payment']);
    this.dialogRef.close();
  
 
    
console.log(this.dataService.getCLOCKID(0));
  }
  edit2() {
    this.data = this.dataService.getCLOCKID(0);
    this.dataService.setCLOCK(0, {
      clockInTime: this.data.clockInTime, clockOutTime: this.data.clockInTime, payment: this.data.payment, duration: this.orderDetails.Duration, total: this.orderDetails.Duration * this.data.payment
    });
    this.dialogRef.close();
    this.router.navigate(['payment']);
  }
}
