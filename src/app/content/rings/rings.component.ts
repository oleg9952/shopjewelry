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
      imgPlaceholder: "/assets/content/rings/ring5_1.jpg",
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
      imgPlaceholder: "/assets/content/rings/ring8_1.jpg",
      cardTitle: "The Arsham Diamond Ring",
      cardPrice: 18
    },
    {
      id: 9,
      cardImg: "/assets/content/rings/ring9_1.jpg",
      imgPlaceholder: "/assets/content/rings/ring9_2.jpg",
      cardTitle: "The Ettore Diamond Ring",
      cardPrice: 43
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
