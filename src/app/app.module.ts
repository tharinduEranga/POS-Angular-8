import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManageCustomersComponent } from './view/manage-customers/manage-customers.component';
import { ManageItemsComponent } from './view/manage-items/manage-items.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ManageOrdersComponent } from './view/manage-orders/manage-orders.component';
import { ViewOrdersComponent } from './view/view-orders/view-orders.component';
import {RouteModule} from './route.module';
import { LoginComponent } from './view/login/login.component';
import {CanActivateGuard} from './guard/can-activate.guard';
import {MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {MaterialComponent} from './view/material/material.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ManageCustomersComponent,
    ManageItemsComponent,
    DashboardComponent,
    ManageOrdersComponent,
    ViewOrdersComponent,
    LoginComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouteModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSortModule
  ],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
