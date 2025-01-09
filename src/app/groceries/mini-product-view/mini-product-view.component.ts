import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-mini-product-view',
  templateUrl: './mini-product-view.component.html',
  styleUrls: ['./mini-product-view.component.css']
})
export class MiniProductViewComponent implements OnInit{
  @Input()
  item!: Product;
  price:number = 3.4;
  title: string = "title";
  constructor(){}
  ngOnInit(): void {
    console.log("item", this.item)
  }

}
