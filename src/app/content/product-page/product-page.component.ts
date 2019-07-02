import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from "../../services/shopping-cart.service";

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
      cardImg: "/assets/content/rings/ring1_1.jpg",
      imgPlaceholder: "/assets/content/rings/ring1_2.jpg",
      cardTitle: "The Davina Diamond Ring",
      cardPrice: 29
    },
    {
      id: 2,
      cardImg: "/assets/content/rings/ring2_1.jpg",
      imgPlaceholder: "/assets/content/rings/ring2_2.jpg",
      cardTitle: "The Alita Diamond Ring",
      cardPrice: 13
    },
    {
      id: 3,
      cardImg: "/assets/content/rings/ring3_1.jpg",
      imgPlaceholder: "/assets/content/rings/ring3_2.jpg",
      cardTitle: "The Swathe Diamond Ring",
      cardPrice: 37
    },
    {
      id: 4,
      cardImg: "/assets/content/rings/ring4_1.jpg",
      imgPlaceholder: "/assets/content/rings/ring4_2.jpg",
      cardTitle: "The Fringe Diamond Ring",
      cardPrice: 11
    },
    {
      id: 5,
      cardImg: "/assets/content/rings/ring5_1.jpg",
      imgPlaceholder: "/assets/content/rings/ring5_2.jpg",
      cardTitle: "The Shaughn Solitaire",
      cardPrice: 170
    },
    {
      id: 6,
      cardImg: "/assets/content/rings/ring6_1.jpg",
      imgPlaceholder: "/assets/content/rings/ring6_2.jpg",
      cardTitle: "The S Alphabet Ring",
      cardPrice: 16
    },
    {
      id: 7,
      cardImg: "/assets/content/rings/ring7_1.jpg",
      imgPlaceholder: "/assets/content/rings/ring7_2.jpg",
      cardTitle: "The Roy Diamond Ring",
      cardPrice: 32
    },
    {
      id: 8,
      cardImg: "/assets/content/rings/ring8_1.jpg",
      imgPlaceholder: "/assets/content/rings/ring8_2.jpg",
      cardTitle: "The Arsham Diamond Ring",
      cardPrice: 18
    },
    {
      id: 9,
      cardImg: "/assets/content/rings/ring9_1.jpg",
      imgPlaceholder: "/assets/content/rings/ring9_2.jpg",
      cardTitle: "The Ettore Diamond Ring",
      cardPrice: 43
    },
    //-----------home cards-----------
    {
      id: 1.1,
      discountSize: 'outlet -50%',
      cardImg: '/assets/content/home/card1_1.jpg',
      imgPlaceholder: "/assets/content/home/card1_2.jpg",
      cardTitle: 'Silver ring with fianites',
      oldPrice: 40,
      cardPrice: 18 
    },
    {
      id: 1.2,
      discountSize: 'outlet -50%',
      cardImg: '/assets/content/home/card2_1.jpg',
      imgPlaceholder: "/assets/content/home/card2_2.jpg",
      cardTitle: 'The Naveah Diamond Ring',
      oldPrice: 40,
      cardPrice: 21
    },
    {
      id: 1.3,
      discountSize: 'outlet -50%',
      cardImg: '/assets/content/home/card3_1.jpg',
      imgPlaceholder: "/assets/content/home/card3_2.jpg",
      cardTitle: 'The Nilav Diamond Ring',
      oldPrice: 40,
      cardPrice: 26
    },
    {
      id: 1.4,
      discountSize: 'outlet -50%',
      cardImg: '/assets/content/home/card4_1.jpg',
      imgPlaceholder: "/assets/content/home/card4_2.jpg",
      cardTitle: 'The Blink Diamond Ring',
      oldPrice: 40,
      cardPrice: 15 
    },
    {
      id: 1.5,
      discountSize: 'outlet -50%',
      cardImg: '/assets/content/home/card5_1.jpg',
      imgPlaceholder: "/assets/content/home/card5_2.jpg",
      cardTitle: 'The Onaona Diamond Ring',
      oldPrice: 40,
      cardPrice: 20 
    },
    {
      id: 1.6,
      discountSize: 'outlet -50%',
      cardImg: '/assets/content/home/card6_1.jpg',
      imgPlaceholder: "/assets/content/home/card6_2.jpg",
      cardTitle: 'The M Alphabet Ring',
      oldPrice: 40,
      cardPrice: 16 
    },
    {
      id: 1.7,
      discountSize: 'outlet -50%',
      cardImg: '/assets/content/home/card7_1.jpg',
      imgPlaceholder: "/assets/content/home/card7_2.jpg",
      cardTitle: 'The Delyth Diamond Ring',
      oldPrice: 40,
      cardPrice: 37 
    }
  ];

  selectedProduct = {
      id: '',
      cardImg: '',
      imgPlaceholder: '',
      cardTitle: '',
      cardPrice: 0,
      finalPrice: 0,
      numberOfRings: 0,
      numberOfItems: 0
  };

  reviews: any[] = [
    {
      customerName: 'Irisha Nikitenko',
      feedbackDate: '15.02.2019',
      feedbackMessage: 'Despite the apparent simplicity, looks very nice on his hand. Great price!'
    }
  ]

  constructor(
    private route:ActivatedRoute,
    private cartService: ShoppingCartService
    ) { }

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
   calculatedPrice = this.selectedProduct.cardPrice;

   decrement() {
     if(this.number <= 1) {
        this.number = 1;
     } else {
        this.number -= 1;
        this.calculatedPrice = this.selectedProduct.cardPrice;
        this.calculatedPrice *= this.number;
     }
   }
   increment() {
     this.number += 1;
     this.calculatedPrice = this.selectedProduct.cardPrice;
     this.calculatedPrice *= this.number;
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
//***************show modal***************
   modalState: boolean = false;
   openModal() {
     this.modalState = !this.modalState;
     if(this.selectedProduct.cardPrice < this.calculatedPrice) {
        this.selectedProduct.finalPrice = this.calculatedPrice;
      } else {
        this.selectedProduct.finalPrice = this.selectedProduct.cardPrice;
      }      
   }

   //***************send data to checkout component***************
  // @Output() messageEvent = new EventEmitter<string>();
  // checkTitle;
  // checkPrice;

  // sendMessage() {
  //   this.checkTitle = this.selectedProduct.cardTitle;
  //   //this.checkPrice = this.selectedProduct.finalPrice;
  //   this.messageEvent.emit(this.checkTitle);
  //   console.log(this.checkTitle);
    
  // }

  //-----service_data

  sendData() {
    this.modalState = !this.modalState;
    this.cartService.addToList(this.selectedProduct);
  }
 
}
