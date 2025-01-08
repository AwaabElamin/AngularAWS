import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items: Product[] = [];
  constructor() { }
  set(product:Product){
    this.items.push(product);
  }
  getItems(){return this.items}
  clear(){
    this.items = [];
    return this.items;
  }
}
