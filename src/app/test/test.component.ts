import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ModalOrderingComponent } from '../modal-ordering/modal-ordering.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  dialogRef: MdDialogRef<ModalOrderingComponent>;
  constructor(
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }
  openDialog() {
    this.dialogRef = this.dialog.open(ModalOrderingComponent, {
      disableClose: false,
      width: '50%',
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }

}
