import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManageCustomersComponent } from './view/manage-customers/manage-customers.component';
import { ManageItemsComponent } from './view/manage-items/manage-items.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ManageOrdersComponent } from './view/manage-orders/manage-orders.component';
import {DataTablesModule} from 'angular-datatables';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatOptionModule, MatSelectModule} from '@angular/material';


const routs: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'customers',
    component: ManageCustomersComponent
  },
  {
    path: 'items',
    component: ManageItemsComponent
  },
  {
    path: 'orders',
    component: ManageOrdersComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ManageCustomersComponent,
    ManageItemsComponent,
    DashboardComponent,
    ManageOrdersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routs),
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    NgxDatatableModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
