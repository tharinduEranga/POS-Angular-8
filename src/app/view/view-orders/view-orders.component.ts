import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order_service';
import {OrderDTO} from '../../dto/orderDTO';
import {OrderDetailDTO} from '../../dto/orderDetailDTO';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  private ordersWithCust: OrderDTO[] = [];
  private orderDetailsByOrder: OrderDetailDTO[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getAllOrdersWithCust();
  }
  getAllOrdersWithCust() {
    this.orderService.getAllWithCustName().subscribe(values => {
      for (const value of values) {
        const orderDTO: OrderDTO = new OrderDTO(value.oid, value.cid, value.date, value.total);
        orderDTO.setname(value.name);
        this.ordersWithCust.push(orderDTO);
      }
    }, error => {
      console.log(error);
    });
  }
  getOrderDetails(order: OrderDTO) {
    this.orderService.orderDetailsByOrder(order.oid).subscribe(value => {
      this.orderDetailsByOrder = value;
    }, error => {
      console.log(error);
    });
  }

}
