import { Component } from '@angular/core';
import { CartService } from '../cart.service';

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
  product: {
    mainPhoto:string,
    photos:any[],
    title:string,
    ingredients:{
      ingredients:string,
      activeIngredientName:string
    },
    aboutItem:{
      nutritionFacts:string,
      productDetails:string
    },
    aboutBrand:{
      bandName:string
    },
    specifications:string,
    customerRatingReviews:[{
      viewerName:string,
      viewerRate:string
    }],
    price:number
  } = {
    mainPhoto: 'https://i5.walmartimages.com/seo/Lay-s-Classic-Potato-Snack-Chips-Party-Size-13-oz-Bag_066afffd-49e9-4d1c-abb4-3cdce85da3f0.43865a58381c82680d373ec7449460e4.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    photos: [
      'https://i5.walmartimages.com/seo/Lay-s-Classic-Potato-Snack-Chips-Party-Size-13-oz-Bag_066afffd-49e9-4d1c-abb4-3cdce85da3f0.43865a58381c82680d373ec7449460e4.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
      'https://i5.walmartimages.com/asr/eac9f5c5-7727-45f1-9e54-178727e2c89a.590d8809c2d8280ec9d38640ce70f94d.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF',
      'https://i5.walmartimages.com/seo/Lay-s-Classic-Potato-Snack-Chips-Party-Size-13-oz-Bag_066afffd-49e9-4d1c-abb4-3cdce85da3f0.43865a58381c82680d373ec7449460e4.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
      'https://i5.walmartimages.com/asr/eac9f5c5-7727-45f1-9e54-178727e2c89a.590d8809c2d8280ec9d38640ce70f94d.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF'
    ],
    title: "Lay's Classic Potato Chips, Party Size, 13 oz Bag",
    ingredients: {
      ingredients: "POTATOES, VEGETABLE OIL (SUNFLOWER, CORN AND/OR CANOLA OIL), AND SALT",
      activeIngredientName: "Potatoes, Vegetable Oil (Canola, Corn, Soybean, and/or Sunflower Oil), and Salt."
    },
    aboutItem: {
      nutritionFacts: "Nutrition Facts",
      productDetails: "It starts with farm-grown potatoes- cooked and seasoned to perfection."
        + "Then we add the tang of sour cream and sharp cheddar. So every Lay's potato chip is perfectly crispy"
        + "and delicious. Happiness in every bite. The shareable size is perfect for your next party or gathering."
        + "Try pairing with your favorite onion dip for a quick and easy appetizer. Try packing Classic Lay’s Potato"
        + "Chips in your next work or school lunch for just the right amount of deliciousness. Includes 1 (13 oz)"
        + "bag of Lay's Classic Potato Snack Chips."
        + "Includes 1 (13 oz) bag of Lay's Classic Potato Snack Chips"
        + "KOSHER"
        + "GLUTEN FREE"
        + "No MSG"
        + "No Artificial Flavors"
        + "No Preservatives"
    },
    aboutBrand:{
      bandName: "Band Name"
    },
    specifications:"Specification",
    customerRatingReviews: [{
      viewerName: 'viewer name',
      viewerRate: 'viewer Rate'
    }],
    price : 3.45
  }





  
  
  
  constructor(private cartService: CartService) { }
  addToCart() {
    this.cartService.set(this.product);
    console.log("product added to cart", this.cartService.getItems());
  }
}
