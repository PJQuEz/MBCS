import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
@Component({
  selector: 'app-modal-clocking',
  templateUrl: './modal-clocking.component.html',
  styleUrls: ['./modal-clocking.component.scss']
})
export class ModalClockingComponent implements OnInit {
  constructor(
  private dialogRef: MdDialogRef<any>
  
  ) { }

  ngOnInit() {
  }
  onNoClick() {
      this.dialogRef.close();
        
      }
}
