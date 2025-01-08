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
  photos = [
    'https://i5.walmartimages.com/seo/Lay-s-Classic-Potato-Snack-Chips-Party-Size-13-oz-Bag_066afffd-49e9-4d1c-abb4-3cdce85da3f0.43865a58381c82680d373ec7449460e4.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    'https://i5.walmartimages.com/asr/eac9f5c5-7727-45f1-9e54-178727e2c89a.590d8809c2d8280ec9d38640ce70f94d.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF',
    'https://i5.walmartimages.com/seo/Lay-s-Classic-Potato-Snack-Chips-Party-Size-13-oz-Bag_066afffd-49e9-4d1c-abb4-3cdce85da3f0.43865a58381c82680d373ec7449460e4.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    'https://i5.walmartimages.com/asr/eac9f5c5-7727-45f1-9e54-178727e2c89a.590d8809c2d8280ec9d38640ce70f94d.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF'
  ];
  title: string = "Lay's Classic Potato Chips, Party Size, 13 oz Bag";
  ingredients: {
    ingredients: string,
    activeIngredientName: string
  } = {
      ingredients: "POTATOES, VEGETABLE OIL (SUNFLOWER, CORN AND/OR CANOLA OIL), AND SALT",
      activeIngredientName: "Potatoes, Vegetable Oil (Canola, Corn, Soybean, and/or Sunflower Oil), and Salt."
    }
  aboutItem: {
    nutritionFacts: string,
    productDetails: string
  } = {
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
    }
  aboutBand: {} = {
    bandName: "Band Name"
  }
  specifications: string = "Specification";
  customerRatingReviews: [{}] = [{
    viewerName: 'viewer name',
    viewerRate: 'viewer Rate'
  }]
}
