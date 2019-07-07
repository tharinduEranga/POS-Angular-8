import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManageCustomersComponent } from './view/manage-customers/manage-customers.component';
import { ManageItemsComponent } from './view/manage-items/manage-items.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ManageOrdersComponent } from './view/manage-orders/manage-orders.component';
import {DataTablesModule} from 'angular-datatables';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatOptionModule, MatSelectModule} from '@angular/material';
import { ViewOrdersComponent } from './view/view-orders/view-orders.component';
import {RouteModule} from './route.module';
import { LoginComponent } from './view/login/login.component';
import {CanActivateGuard} from './guard/can-activate.guard';
import {CanActivate} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ManageCustomersComponent,
    ManageItemsComponent,
    DashboardComponent,
    ManageOrdersComponent,
    ViewOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    NgxDatatableModule,
    MatSelectModule,
    MatOptionModule,
    RouteModule
  ],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
