import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  items = ["10","20"];
  constructor(private router:Router){}
}
