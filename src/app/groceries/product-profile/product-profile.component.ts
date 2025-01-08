import { Component } from '@angular/core';

@Component({
  selector: 'app-product-profile',
  templateUrl: './product-profile.component.html',
  styleUrls: ['./product-profile.component.css']
})
export class ProductProfileComponent {
photoClicked(_t6: string) {
console.log('photo', _t6);
this.mainPhoto = _t6;
console.log('mainPhoto', this.mainPhoto);
}
  mainPhoto = 'https://i5.walmartimages.com/seo/Lay-s-Classic-Potato-Snack-Chips-Party-Size-13-oz-Bag_066afffd-49e9-4d1c-abb4-3cdce85da3f0.43865a58381c82680d373ec7449460e4.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF';
  photos= [
    'https://i5.walmartimages.com/seo/Lay-s-Classic-Potato-Snack-Chips-Party-Size-13-oz-Bag_066afffd-49e9-4d1c-abb4-3cdce85da3f0.43865a58381c82680d373ec7449460e4.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    'https://i5.walmartimages.com/asr/eac9f5c5-7727-45f1-9e54-178727e2c89a.590d8809c2d8280ec9d38640ce70f94d.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF',
    'https://i5.walmartimages.com/seo/Lay-s-Classic-Potato-Snack-Chips-Party-Size-13-oz-Bag_066afffd-49e9-4d1c-abb4-3cdce85da3f0.43865a58381c82680d373ec7449460e4.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    'https://i5.walmartimages.com/asr/eac9f5c5-7727-45f1-9e54-178727e2c89a.590d8809c2d8280ec9d38640ce70f94d.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF'
  ];
  title: string = "product title";
  ingredients:{} = {
    ingredients: "Ingredients",
    activeIngredientName: "Active Ingredient Name"
  }
  aboutItem:{} = {
    nutritionFacts:"Nutrition Facts",
    productDetails: "product Details"
  }
  aboutBand:{} = {
    bandName:"Band Name"
  }
  specifications:string = "Specification";
  customerRatingReviews:[{}] = [{
    viewerName:'viewer name',
    viewerRate: 'viewer Rate'
  }]
}
