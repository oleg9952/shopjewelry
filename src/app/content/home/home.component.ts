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
      img: '/assets/content/home/card1.svg',
      title: 'Silver ring with fianites',
      oldPrice: 40,
      newPrice: 20 
    },
    {
      id: 1.2,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card2.svg',
      title: 'Earrings “Anna” (green agate)',
      oldPrice: 40,
      newPrice: 20 
    },
    {
      id: 1.3,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card3.svg',
      title: 'Silver ring with fianites',
      oldPrice: 40,
      newPrice: 20 
    },
    {
      id: 1.4,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card4.svg',
      title: 'Pendant-protector "Alatyr"',
      oldPrice: 40,
      newPrice: 20 
    },
    {
      id: 1.5,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card5.svg',
      title: 'Silver ring with blue quartz"',
      oldPrice: 40,
      newPrice: 20 
    },
    {
      id: 1.6,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card6.svg',
      title: 'Silver braslet',
      oldPrice: 40,
      newPrice: 20 
    },
    {
      id: 1.7,
      discountSize: 'outlet -50%',
      img: '/assets/content/home/card7.svg',
      title: 'Silver braslet',
      oldPrice: 40,
      newPrice: 20 
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
