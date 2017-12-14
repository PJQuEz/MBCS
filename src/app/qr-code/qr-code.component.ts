import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QRCodeComponent implements OnInit {
  day;
  week;
  month;
  constructor() { }

  ngOnInit() {
  }

  getByDate() {
    let date = new Date(this.day);
    let firstDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    let m = firstDay.getMonth() + 1;
    let m2 = lastDay.getMonth() + 1;
    let StringFirstDay = firstDay.getFullYear() + '-' + m + '-' + firstDay.getDate();
    let StringLastDay = lastDay.getFullYear() + '-' + m2 + '-' + lastDay.getDate();
    console.log(StringFirstDay);
    console.log(StringLastDay);
  }
  getByWeek() {
    let a = this.week.toString();
    let w = a.substring(a.indexOf('-') + 2, a.length);
    let y = a.substring(0, a.indexOf('-'));
    let d = (1 + (w - 1) * 7); // 1st of January + 7 days for each week
    let firstDay = new Date(y, 0, d);
    let lastDay = new Date(y, 0, d + 8);
    let m = firstDay.getMonth() + 1;
    let m2 = lastDay.getMonth() + 1;
    let StringFirstDay = firstDay.getFullYear() + '-' + m + '-' + firstDay.getDate();
    let StringLastDay = lastDay.getFullYear() + '-' + m2 + '-' + lastDay.getDate();
    console.log(StringFirstDay);
    console.log(StringLastDay);
  }
  getByMonth() {
    let a = this.month.toString();
    let mm = a.substring(a.indexOf('-') + 1, a.length);
    let y = a.substring(0, a.indexOf('-'));
    let firstDay = new Date(y, Number(mm) - 1, 0);
    let lastDay = new Date(y, Number(mm), 1);
    let m = firstDay.getMonth() + 1;
    let m2 = lastDay.getMonth() + 1;
    let StringFirstDay = firstDay.getFullYear() + '-' + m + '-' + firstDay.getDate();
    let StringLastDay = lastDay.getFullYear() + '-' + m2 + '-' + lastDay.getDate();
    console.log(StringFirstDay);
    console.log(StringLastDay);
  }
}
