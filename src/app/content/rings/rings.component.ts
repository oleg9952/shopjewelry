import { Component, OnInit } from '@angular/core';
import { IRings } from './IRings';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.sass']
})
export class RingsComponent implements OnInit {
  ringCards: IRings[] = [
    {
      cardImg: "/assets/content/rings/ring1.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 40
    },
    {
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 35
    },
    {
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 30
    },
    {
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 31.99
    },
    {
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 35
    },
    {
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 33
    },
    {
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 66
    },
    {
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 14
    },
    {
      cardImg: "/assets/content/rings/ring2.svg",
      cardTitle: "Silver ring with fianites",
      cardPrice: 99.99
    },
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
