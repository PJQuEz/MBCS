import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { DndModule } from 'ng2-dnd';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ManageMenuComponent,
    TableComponent,
    Table2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    DndModule.forRoot(),
    NgxDatatableModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
