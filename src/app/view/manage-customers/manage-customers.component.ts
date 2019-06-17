import { Component, OnInit } from '@angular/core';
import {CustomerDTO} from '../../dto/customerDTO';
import {CustomerService} from '../../services/customer_service';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {
  customers: CustomerDTO[] = [];
  customer: CustomerDTO =  new CustomerDTO(undefined, '', '', '');
  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getAllCustomers();
  }
  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe( cust => {
      this.customers = cust;
    });
  }
  addCustomer(cid, name, address, mobile) {
    if (name === '' || address === '' || mobile === '') {
      alert('Please input values');
      return;
    }
    const customerDTO = new CustomerDTO(0, name, address, mobile);
    this.customerService.addCustomer(customerDTO).subscribe( resp => {
      alert(resp.message);
      this.getAllCustomers();
    });
  }
  updateCustomer(cid, name, address, mobile) {
    if (name === '' || address === '' || mobile === '') {
      alert('Please input values');
      return;
    }
    const customerDTO = new CustomerDTO(Number(cid), name, address, mobile);
    this.customerService.updateCustomer(customerDTO).subscribe( resp => {
      alert(resp.message);
      this.getAllCustomers();
    });
  }
  searchCustomer(cid) {
    if (cid === '' ) {
      alert('Please input cid');
      return;
    }
    this.customerService.searchCustomer(cid).subscribe( resp => {
      this.customer = resp;
    });
  }
  deleteCustomer(cid) {
    if (cid === '' ) {
      alert('Please input cid');
      return;
    }
    this.customerService.deleteCustomer(cid).subscribe( resp => {
      alert(resp.message);
      this.getAllCustomers();
    });
  }
}
