import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit {
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false,
        type: 'html',
        // tslint:disable-next-line:arrow-return-shorthand
        valuePrepareFunction: (value) => { return `<img md-card-image src="https://lh3.googleusercontent.com/-53Mq6jbVTr4/AAAAAAAAAAI/AAAAAAAAAA8/RS_d3j0lLPM/s36-p-k-no/photo.jpg" />` }
      },
      name: {
        title: 'Full Name',
        filter: false,

      },
      username: {
        title: 'User Name',
        filter: false,

      },
      email: {
        title: 'Email',
        filter: false,

      },
    },
     actions : false,
     noDataMessage : 'test'
    ,
      pager:{
        perPage: 2
      }
  };

  data = [
    {
      id: 'https://lh3.googleusercontent.com/-53Mq6jbVTr4/AAAAAAAAAAI/AAAAAAAAAA8/RS_d3j0lLPM/s36-p-k-no/photo.jpg',
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
  ];

  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit() {
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to inclue in the search
      {
        field: 'id',
        search: query,
      },
      {
        field: 'name',
        search: query,
      },
      {
        field: 'username',
        search: query,
      },
      {
        field: 'email',
        search: query,
      },
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

}
