import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.scss']
})
export class ModalPaymentComponent implements OnInit {
  orderDetails: any;
  total;
  constructor(
  private dialogRef: MdDialogRef<any>,
  
  ) {this.orderDetails = {
    Table: 1,
    Recieve: this.total
  }; }

  ngOnInit() { 
  }
  onNoClick() {
    this.dialogRef.close();
    
  }
  onNoClick2() {
    this.dialogRef.close();
    window.location.reload();
    
  }
}
