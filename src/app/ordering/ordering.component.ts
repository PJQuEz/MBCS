import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ModalOrderingComponent } from '../modal-ordering/modal-ordering.component';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent implements OnInit {
  dialogRef: MdDialogRef<ModalOrderingComponent>;

  constructor(
    public dialog: MdDialog,
  ) { }

  ngOnInit() {
  }
  openDialog() {
    this.dialogRef = this.dialog.open(ModalOrderingComponent, {
      disableClose: false,
      width: '50%',
    });

  }
}
