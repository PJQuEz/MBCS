import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';

import { OrderingComponent } from './ordering/ordering.component';


export const appRoutes: Routes = [
  {
    path: '',
    component: ManageMenuComponent
  },
  {
    path: 'styles',
    component: Table2Component
  },
  {
    path: 'list',
    component: TableComponent
  },
  {
    path: 'ordering',
    component: OrderingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
