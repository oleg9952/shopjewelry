import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "../../services/shopping-cart.service";
// import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  
  checkState: boolean = false;


  itemList = [];

  constructor(private cartService: ShoppingCartService) { }

  // productName: string;

  // receiveMessage($event) {
  //   this.productName = $event;
  // }

  ngOnInit() {
    this.itemList = this.cartService.getList();
  }

  logArray() {
    console.log(this.itemList.length);
  }

  // removeItem() {
  //   this.cartService.removeFromList(this.itemList.id)
  // }

}
