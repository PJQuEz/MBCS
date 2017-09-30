import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { DndModule } from 'ng2-dnd';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CdkTableModule } from '@angular/cdk';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { OrderingComponent } from './ordering/ordering.component';
import { SelectedMenuComponent } from './selected-menu/selected-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
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
import { DataService } from './data.service';
import { EditComponent } from './edit/edit.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { EditIngredientComponent } from './edit-ingredient/edit-ingredient.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditBranchManageComponent } from './edit-branch-manage/edit-branch-manage.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ManageMenuComponent,
    OrderingComponent,
    SelectedMenuComponent,
    MenuListComponent,
    TableComponent,
    NewTableComponent,
    TableMenuComponent,
    TableIngredientComponent,
    TableBranchComponent,
    TableBranchManagerComponent,
    TableEmployeeComponent,
    ManageBranchComponent,
    ManageBranchManagerComponent,
    ManageIngredientComponent,
    ManageEmployeeComponent,
    EditComponent,
    EditMenuComponent,
    EditIngredientComponent,
    EditEmployeeComponent,
    EditBranchManageComponent,
    EditBranchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    DndModule.forRoot(),
    NgxDatatableModule,
    Ng2SmartTableModule,
    CdkTableModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
