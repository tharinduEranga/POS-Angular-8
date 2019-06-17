import { Component, OnInit } from '@angular/core';
import {CustomerDTO} from '../../dto/customerDTO';
import {CustomerService} from '../../services/customer_service';
import {ItemService} from '../../services/item_service';
import {ItemDTO} from '../../dto/itemDTO';
import {OrderDetailDTO} from '../../dto/orderDetailDTO';
import {OrderDTO} from '../../dto/orderDTO';
import {OrderService} from '../../services/order_service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  customers: CustomerDTO[] = [];
  items: ItemDTO[];
  selectedCustomer ;
  selectedItem ;
  orderDetails: OrderDetailDTO[] = [];
  order ;
  total = 0;
  constructor(private customerService: CustomerService, private itemService: ItemService, private orderService: OrderService) { }

  ngOnInit() {
    this.getAllCustomers();
    this.getAllItems();
  }
  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe( cust => {
      this.customers = cust;
    });
  }
  getAllItems() {
    this.itemService.getAllItems().subscribe( items => {
      this.items = items;
    });
  }
  setCustomer(event) {
    const index = event.target.selectedIndex - 1;
    this.selectedCustomer = this.customers[index];
  }
  setItem(event) {
    const index = event.target.selectedIndex - 1;
    this.selectedItem = this.items[index];
  }
  addOrderDetails(qty) {
    const d = new Date();
    const today = d.getFullYear() +  '-' + (d.getMonth() + 1 )
      + '-' + d.getDate();
    const orderDetailDTO: OrderDetailDTO = new OrderDetailDTO(this.selectedItem.code, this.selectedItem.name, qty * this.selectedItem.price, Number(qty));
    this.orderDetails.push(orderDetailDTO);
    this.total = this.total + qty * this.selectedItem.price;
    this.order = new OrderDTO(0, this.selectedCustomer.cid, today,  this.total);
    this.order.setorderDetailDTOS(this.orderDetails);
  }
  addOrder() {
    this.orderService.addOrder(this.order).subscribe(value => {
      alert(value.message);
    }, err => {
      alert('Failed' + err);
    });
  }
}
