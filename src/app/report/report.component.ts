import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BRANCH } from '../data';
import { ReportService } from '../shared/report.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  day;
  week;
  month;
  sPeriod;
  ePeriod;
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
    { name: 'Name' },
    { name: 'Address' },
    { name: 'Manager' }
  ];
  dTypes = [
    { value: 'Selling statistic', name: 'Selling statistic' },
    { value: 'Baristas statistic', name: 'Baristas statistic' }
  ];
  tTypes = [
    { value: 'Daily', name: 'Daily' },
    { value: 'Weekly', name: 'Weekly' },
    { value: 'Monthly', name: 'Monthly' },
    { value: 'Period', name: 'Period' }
  ];
  tbTypes = [
    { value: 'Table', name: 'Table' },
    { value: 'Graph', name: 'Graph' }
  ];
  p = {
    'dType': '',
    'tType': '',
    'tbType': ''
  };
  constructor(private dataService: DataService,
    private reportService: ReportService) { }

  ngOnInit() {
    let i = this.reportService.selling('2017-12-04', '2017-12-11');
    console.log(i);
  }
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType: string = 'line';
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
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
  getByPeriod() {
    let date = new Date(this.sPeriod);
    let firstDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
    let m = firstDay.getMonth() + 1;
    let StringFirstDay = firstDay.getFullYear() + '-' + m + '-' + firstDay.getDate();

  }
  test() {
    this.rows = this.dataService.getBRANCH();
  }
}
