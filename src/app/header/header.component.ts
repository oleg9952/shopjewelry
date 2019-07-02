import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//--------TOGGLE NAV-MOBILE--------
  navState: boolean = false;
  toggleNav() {
    this.navState = !this.navState;
    console.log(this.navState);
    
  }
}
