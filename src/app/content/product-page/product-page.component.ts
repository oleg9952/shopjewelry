import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})

export class ProductPageComponent implements OnInit, OnDestroy {
  number: number = 1;
  id: number;
  sub;

  stateCheck: boolean = false;

  ringCards: any[] = [
    {
      id: 1,
      cardImg: "/assets/content/rings/ring1.svg",
      cardTitle: "One",
      cardPrice: 40
    },
    {
      id: 2,
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Two",
      cardPrice: 35
    },
    {
      id: 3,
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 30
    },
    {
      id: 4,
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 31.99
    },
    {
      id: 5,
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 35
    },
    {
      id: 6,
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 33
    },
    {
      id: 7,
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 66
    },
    {
      id: 8,
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 14
    },
    {
      id: 9,
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 99.99
    }
  ];

  selectedProduct = {};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
     this.id = params['id'];
     this.selectedProduct = this.ringCards.find((oneProduct)=> oneProduct.id == this.id);
     });
    console.log(this.id);
   }

   ngOnDestroy() {
    this.sub.unsubscribe();
   }

//product number counter
   decrement() {
     if(this.number <= 1) {
        this.number = 1;
     } else {
        this.number -= 1;
     }
   }
   increment() {
     this.number += 1;
     console.log(this.number);
   }

//toggle accordion
   toggleAccordion() {
     this.stateCheck = !this.stateCheck;
     console.log(this.stateCheck);
   }
}
