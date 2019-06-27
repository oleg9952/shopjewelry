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
  ]
  insertAmound: any[] = [
    {
      pearls: 9,
      naturalStone: 2,
      quartz: 2,
      cubicZirconia: 21,
      syntheticAgate: 1,
      mineralGlass: 3,
      enamel: 17
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
