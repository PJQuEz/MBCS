import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-ordering',
  templateUrl: './modal-ordering.component.html',
  styleUrls: ['./modal-ordering.component.scss']
})
export class ModalOrderingComponent implements OnInit {

  constructor(
    private dialogRef: MdDialogRef<any>
    ) { }

  ngOnInit() {
  }

}
