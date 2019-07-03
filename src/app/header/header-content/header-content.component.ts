import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "../../services/shopping-cart.service";

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.sass']
})
export class HeaderContentComponent implements OnInit {

  numberOfChecked = 0;
  checkedItems = [];

  constructor(private cartService: ShoppingCartService) {  }

  ngOnInit() {
    this.checkedItems = this.cartService.getList();
  }

  showNumber() {
    this.numberOfChecked = this.checkedItems.length;
  }


}
