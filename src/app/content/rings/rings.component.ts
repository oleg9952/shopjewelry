import { Component, OnInit } from '@angular/core';
//import { IRings } from './IRings';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.sass']
})
export class RingsComponent implements OnInit {

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

  themesAmount: any[] = [
    {
      dimensionless: 180,
      double: 22,
      engagementParty: 2,
      withRocks: 27,
      thin: 30,
      phalangeal: 22,
      wide: 39
    }
  ];
  insertAmount: any[] = [
    {
      pearls: 9,
      naturalStone: 2,
      quartz: 2,
      cubicZirconia: 21,
      syntheticAgate: 1,
      mineralGlass: 3,
      enamel: 17
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
