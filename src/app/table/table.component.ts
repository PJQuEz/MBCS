import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  rows = [
  { name: 'Dany', gender: 'Male', company: '<img md-card-image src="https://lh3.googleusercontent.com/-53Mq6jbVTr4/AAAAAAAAAAI/AAAAAAAAAA8/RS_d3j0lLPM/s36-p-k-no/photo.jpg" />' },
  { name: 's', gender: 'Male', company: 'KFC' },
  { name: 'a', gender: 'Male', company: 'KFC' },
  { name: 'e', gender: 'Male', company: 'KFC' },
  ];
  temp = [];
  selected: any[] = [];
  columns = [
    { prop: 'name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];
  @ViewChild('table') table: DatatableComponent;
  ngOnInit() {
  }
  constructor() {
    this.temp = this.rows;
  }

  fetch(cb) {
    // const req = new XMLHttpRequest();
    // req.open('GET', `../../../node_modules/@swimlane/ngx-datatable/assets/data/company.json`);

    // req.onload = () => {
    //   cb(JSON.parse(req.response));
    // };

    // req.send();
  }

  updateFilter(event) {
    console.log(event);
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val || d.gender.toLowerCase().indexOf(val) !== -1;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  onSelect(event) {
    console.log('Event: select', event, this.selected[0].name);
  }

  onActivate(event) {
    console.log('Event: activate', event);
  }
}

