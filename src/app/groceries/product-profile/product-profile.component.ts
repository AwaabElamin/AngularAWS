import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-profile',
  templateUrl: './product-profile.component.html',
  styleUrls: ['./product-profile.component.css']
})
export class ProductProfileComponent {
  photoClicked(_t6: string) {
    // console.log('photo', _t6);
    this.product.mainPhoto = _t6;
    // console.log('mainPhoto', this.product.mainPhoto);
  }
 @Input()
  product!: Product;
  constructor(private cartService: CartService) { }
  addToCart() {
    this.cartService.set(this.product);
    console.log("product added to cart", this.cartService.getItems());
  }
}
