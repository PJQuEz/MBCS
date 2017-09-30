import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  // links = [
  //   {
  //     icon: 'home',
  //     name: 'Home',
  //     path: '/'
  //   },
  //   {
  //     icon: 'collections_bookmark',
  //     name: 'Style Guides',
  //     path: '/styles'
  //   },
  //   {
  //     icon: 'view_week',
  //     name: 'Another Page',
  //     path: '/list'
  //   },
  //   {
  //     icon: 'receipt',
  //     name: 'Order',
  //     path: '/ordering'
  //   }
  // ];
  links = [
    {
      icon: 'view_week',
      name: 'Menu management',
      path: '/menu'
    },
    {
      icon: 'view_week',
      name: 'Ingredient management',
      path: '/ingredient'
    },
    {
      icon: 'view_week',
      name: 'Branch management',
      path: '/branch'
    },
    {
      icon: 'view_week',
      name: 'Branch manager management',
      path: '/branchmanager'
    },
    {
      icon: 'view_week',
      name: 'Employee management',
      path: '/employee'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
