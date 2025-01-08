import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-product-view',
  templateUrl: './mini-product-view.component.html',
  styleUrls: ['./mini-product-view.component.css']
})
export class MiniProductViewComponent {
  price:number = 3.4;
  title: string = "title";
}
