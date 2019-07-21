import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {CustomerService} from '../../services/customer_service';
import {CustomerDTO} from '../../dto/customerDTO';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  displayedColumns: string[] = ['cid', 'name', 'address', 'mobile'];
  dataSource: MatTableDataSource<CustomerDTO>;

  customers: CustomerDTO[] = [] ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(value => {
      this.customers = value;
      console.log(this.customers);
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.customers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error1 => {
      console.log(error1);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
