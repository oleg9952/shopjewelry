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

//***************get state***************
  accordionState: boolean = false;
  imgState: boolean = true;

//***************add comments***************
  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0');
  yyyy = this.today.getFullYear();

  cName;
  cMessage: string;
  cEmail;
//***************calculated price***************


  ringCards: any[] = [
    {
      id: 1,
      cardImg: "/assets/content/rings/ring1.svg",
      imgPlaceholder: "/assets/image-placeholder.jpg",
      cardTitle: "One",
      cardPrice: 40
    },
    {
      id: 2,
      cardImg: "/assets/content/rings/ring2.svg",
      imgPlaceholder: "/assets/image-placeholder.jpg",
      cardTitle: "Two",
      cardPrice: 35
    },
    {
      id: 3,
      cardImg: "/assets/content/rings/ring2.svg",
      imgPlaceholder: "/assets/image-placeholder.jpg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 30
    },
    {
      id: 4,
      cardImg: "/assets/content/rings/ring2.svg",
      imgPlaceholder: "/assets/image-placeholder.jpg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 31.99
    },
    {
      id: 5,
      cardImg: "/assets/content/rings/ring2.svg",
      imgPlaceholder: "/assets/image-placeholder.jpg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 35
    },
    {
      id: 6,
      cardImg: "/assets/content/rings/ring2.svg",
      imgPlaceholder: "/assets/image-placeholder.jpg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 33
    },
    {
      id: 7,
      cardImg: "/assets/content/rings/ring2.svg",
      imgPlaceholder: "/assets/image-placeholder.jpg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 66
    },
    {
      id: 8,
      cardImg: "/assets/content/rings/ring2.svg",
      imgPlaceholder: "/assets/image-placeholder.jpg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 14
    },
    {
      id: 9,
      cardImg: "/assets/content/rings/ring2.svg",
      imgPlaceholder: "/assets/image-placeholder.jpg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 99.99
    }
  ];

  selectedProduct = {};

  reviews: any[] = [
    {
      customerName: 'Irisha Nikitenko',
      feedbackDate: '15.02.2019',
      feedbackMessage: 'Despite the apparent simplicity, looks very nice on his hand. Great price!'
    }
  ]

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

//***************product number counter***************
  //  calculatedPrice = this.selectedProduct.cardPrice;
  //  final = this.calculatedPrice;

   decrement() {
     if(this.number <= 1) {
        this.number = 1;
     } else {
        this.number -= 1;
        // this.calculatedPrice = this.selectedProduct.cardPrice;
        // this.calculatedPrice *= this.number;
        // console.log(this.final);
     }
   }
   increment() {
     this.number += 1;
    //  this.calculatedPrice = this.selectedProduct.cardPrice;
    //  this.calculatedPrice *= this.number;
    //  console.log(this.calculatedPrice);  
   }

//***************toggle accordion***************
   toggleAccordion() {
     this.accordionState = !this.accordionState;
   }

//***************switch product img***************
   firstProductImg() {
     this.imgState = true;
     console.log(this.imgState);
   }
   secondProductImg() {
    this.imgState = false;
    console.log(this.imgState);
   }

//***************push a new comment to review***************

   addComment() {
      let currentDate = `${this.dd}.${this.mm}.${this.yyyy}`;
      let newComment = {
        customerName: this.cName,
        feedbackDate: currentDate,
        feedbackMessage: this.cMessage
      };
      this.reviews.push(newComment);
      this.cName = '';
      this.cMessage = '';
      this.cEmail = '';
   }
}
