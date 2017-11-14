import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ModalOrderingComponent } from '../modal-ordering/modal-ordering.component';
import { ModalClockingComponent } from '../modal-clocking/modal-clocking.component'
@Component({
  selector: 'app-clocking',
  templateUrl: './clocking.component.html',
  styleUrls: ['./clocking.component.scss']
})
export class ClockingComponent implements OnInit {
  dialogRef: MdDialogRef<ModalClockingComponent>;
  constructor(public dialog: MdDialog, ) {  }
  ngOnInit() {
  }
  openDialog() {    setTimeout(() => {
    
    this.dialogRef = this.dialog.open(ModalClockingComponent, {
      disableClose: false,
      width: '50%',
    });    }, 3000); 
    


  }
}
