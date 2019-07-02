import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingList = [];

  constructor() { }

  addToList(item) {
    this.shoppingList.push(item);
  }

  removeFromList(item) {
    this.shoppingList = this.shoppingList.filter(currentItem => {
      return currentItem.id != item.id;
    });
  }

  clearList() {
    this.shoppingList = [];
  }

  getList() {
    return this.shoppingList;
  }

}
