import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanActivate, RouterModule, Routes} from '@angular/router';
import {ViewOrdersComponent} from './view/view-orders/view-orders.component';
import {ManageOrdersComponent} from './view/manage-orders/manage-orders.component';
import {ManageItemsComponent} from './view/manage-items/manage-items.component';
import {ManageCustomersComponent} from './view/manage-customers/manage-customers.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {LoginComponent} from './view/login/login.component';
import {CanActivateGuard} from './guard/can-activate.guard';
import {MaterialComponent} from './view/material/material.component';



const routs: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'customers',
    component: ManageCustomersComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'items',
    component: ManageItemsComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'orders',
    component: ManageOrdersComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'viewOrders',
    component: ViewOrdersComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'material',
    component: MaterialComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routs)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
