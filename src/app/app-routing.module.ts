import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { OrderingComponent } from './ordering/ordering.component';
import { TableComponent } from './table/table.component';
import { NewTableComponent } from './new-table/new-table.component';
import { TableMenuComponent } from './table-menu/table-menu.component';
import { TableIngredientComponent } from './table-ingredient/table-ingredient.component';
import { TableBranchComponent } from './table-branch/table-branch.component';
import { TableBranchManagerComponent } from './table-branch-manager/table-branch-manager.component';
import { TableEmployeeComponent } from './table-employee/table-employee.component';
import { ManageBranchComponent } from './manage-branch/manage-branch.component';
import { ManageBranchManagerComponent } from './manage-branch-manager/manage-branch-manager.component';
import { ManageIngredientComponent } from './manage-ingredient/manage-ingredient.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { EditComponent } from './edit/edit.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { EditIngredientComponent } from './edit-ingredient/edit-ingredient.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditBranchManageComponent } from './edit-branch-manage/edit-branch-manage.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { ClockingComponent } from './clocking/clocking.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { ModalOrderingComponent } from './modal-ordering/modal-ordering.component';
import { TestComponent } from './test/test.component';
import { QRCodeComponent } from './qr-code/qr-code.component';

import { ClockOutComponent } from './clock-out/clock-out.component';
import { WorkforceComponent } from './workforce/workforce.component';
import { ReportComponent } from './report/report.component';
import { ProfilingComponent } from './profiling/profiling.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: ManageMenuComponent
  },
  {
    path: 'styles',
    component: TableMenuComponent
  },
  {
    path: 'list',
    component: NewTableComponent
  },
  {
    path: 'ordering',
    component: OrderingComponent
  },
  {
    path: 'menu',
    component: TableMenuComponent
  },
  {
    path: 'ingredient',
    component: TableIngredientComponent
  },
  {
    path: 'branch',
    component: TableBranchComponent
  },
  {
    path: 'branchmanager',
    component: TableBranchManagerComponent
  },
  {
    path: 'employee',
    component: TableEmployeeComponent
  },
  {
    path: 'menu/add',
    component: ManageMenuComponent
  },
  {
    path: 'menu/edit/:id',
    component: EditMenuComponent
  },
  {
    path: 'ingredient/add',
    component: ManageIngredientComponent
  },
  {
    path: 'ingredient/edit/:id',
    component: EditIngredientComponent
  },
  {
    path: 'branch/add',
    component: ManageBranchComponent
  },
  {
    path: 'branch/edit/:id',
    component: EditBranchComponent
  },
  {
    path: 'branchmanager/add',
    component: ManageBranchManagerComponent
  },
  {
    path: 'branchmanager/edit/:id',
    component: EditBranchManageComponent
  },
  {
    path: 'employee/add',
    component: ManageEmployeeComponent
  },
  {
    path: 'employee/edit/:id',
    component: EditEmployeeComponent
  },
  {
    path: 'clocking',
    component: ClockingComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'payment/list/:id',
    component: PaymentListComponent
  },
  {
    path: 'payment/list/3',
    component: PaymentListComponent
  },
  {
    path: 'qrcode',
    component: QRCodeComponent
  }  ,
  {
    path: 'clockout',
    component: ClockOutComponent
  },
  {
    path: 'workforce',
    component: WorkforceComponent
  }  ,
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'profiling',
    component: ProfilingComponent
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
