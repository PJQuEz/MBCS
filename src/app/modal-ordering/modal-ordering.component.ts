import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-ordering',
  templateUrl: './modal-ordering.component.html',
  styleUrls: ['./modal-ordering.component.scss']
})
export class ModalOrderingComponent implements OnInit {
  orderDetails: any;
  constructor(
    private dialogRef: MdDialogRef<any>
    ) { }

  ngOnInit() {    this.orderDetails = {
    amount: 1,
    grade: 'normal',
    sweet: 'normal'
  };
  }

}
