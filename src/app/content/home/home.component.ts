import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {
  ringCards: any[] = [
    {
      id: 1.1,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card1_1.jpg',
      title: 'The Coira Solitaire Diamond',
      oldPrice: 40,
      newPrice: 18 
    },
    {
      id: 1.2,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card2_1.jpg',
      title: 'The Naveah Diamond Ring',
      oldPrice: 40,
      newPrice: 21
    },
    {
      id: 1.3,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card3_1.jpg',
      title: 'The Nilav Diamond Ring',
      oldPrice: 40,
      newPrice: 26 
    },
    {
      id: 1.4,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card4_1.jpg',
      title: 'The Blink Diamond Ring',
      oldPrice: 40,
      newPrice: 15 
    },
    {
      id: 1.5,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card5_1.jpg',
      title: 'The Onaona Diamond Ring',
      oldPrice: 40,
      newPrice: 20 
    },
    {
      id: 1.6,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card6_1.jpg',
      title: 'The M Alphabet Ring',
      oldPrice: 40,
      newPrice: 16
    },
    {
      id: 1.7,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card7_1.jpg',
      title: 'The Delyth Diamond Ring',
      oldPrice: 40,
      newPrice: 37 
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
