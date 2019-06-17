import { Component, OnInit } from '@angular/core';
import {ItemDTO} from '../../dto/itemDTO';
import {ItemService} from '../../services/item_service';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.css']
})
export class ManageItemsComponent implements OnInit {
  items: ItemDTO[] = [];
  item: ItemDTO =  new ItemDTO(null, '', null, null);
  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.getAllItems();
  }
  getAllItems() {
    this.itemService.getAllItems().subscribe( resp => {
      this.items = resp;
    });
  }
  addItem(code, name, price, qty) {
    if ( name === '' || price === '' || qty === '') {
      alert('Please input values');
      return;
    }
    const itemDTO = new ItemDTO(0, name, Number(price), Number(qty));
    this.itemService.addItem(itemDTO).subscribe( resp => {
      alert(resp.message);
      this.getAllItems();
    });
  }
  updateItem(code, name, price, qty) {
    if (code === '' || name === '' || price === '' || qty === '') {
      alert('Please input values');
      return;
    }
    const itemDTO = new ItemDTO(Number(code), name, Number(price), Number(qty));
    this.itemService.updateItem(itemDTO).subscribe( resp => {
      alert(resp.message);
      this.getAllItems();
    });
  }
  searchItem(code) {
    if (code === '' ) {
      alert('Please input code');
      return;
    }
    this.itemService.searchItem(code).subscribe( resp => {
      this.item = resp;
    });
  }
  deleteItem(code) {
    if (code === '' ) {
      alert('Please input code');
      return;
    }
    this.itemService.deleteItem(code).subscribe( resp => {
      alert(resp.message);
      this.getAllItems();
    });
  }
}
