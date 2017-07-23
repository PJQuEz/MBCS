import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';


export const appRoutes: Routes = [
  {
    path: '',
    component: ManageMenuComponent
  },
  {
    path: 'styles',
    component: ManageMenuComponent
  },
  {
    path: 'list',
    component: ManageMenuComponent
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
