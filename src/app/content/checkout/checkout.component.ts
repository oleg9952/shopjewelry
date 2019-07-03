import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "../../services/shopping-cart.service";
// import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  final;
  
  checkState: boolean = false;


  itemList = [];

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.itemList = this.cartService.getList();
    this.final = this.cartService.calculateTotal();
  }

  reCalculateTotal() {
    let totalToPay = 0;
    for(let item of this.itemList) {
      totalToPay += item.finalPrice;
    }
    this.final = totalToPay;
  }

  logTotal() {
    console.log(this.final);
  }
}
