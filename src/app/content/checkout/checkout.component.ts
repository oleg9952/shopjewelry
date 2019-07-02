import { Component, OnInit } from '@angular/core';
// import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {


  constructor() { }

  productName: string;

  receiveMessage($event) {
    this.productName = $event;
  }

  ngOnInit() {}
  

}
