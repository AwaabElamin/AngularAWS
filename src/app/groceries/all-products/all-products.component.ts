import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  items: Product[] = [
    {
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
      aboutBrand: {
        brandName: "Band Name"
      },
      specifications: "Specification",
      customerRatingReviews: [{
        viewerName: 'viewer name',
        viewerRate: 'viewer Rate'
      }],
      price: 3.45
    },
    {
      mainPhoto: 'https://i5.walmartimages.com/seo/Beef-Choice-Angus-Prime-Rib-Roast-Bone-In-2-75-9-1-lb_f43fe09d-ab6f-4893-8083-810f7f1bb1be.b6ea5ff6fcfbc1d90577a374044d3078.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
      photos: [
        'https://i5.walmartimages.com/seo/Beef-Choice-Angus-Prime-Rib-Roast-Bone-In-2-75-9-1-lb_f43fe09d-ab6f-4893-8083-810f7f1bb1be.b6ea5ff6fcfbc1d90577a374044d3078.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
        'https://i5.walmartimages.com/asr/9838714f-856f-4c8d-8752-9f38ff34f589.14e539f41953eb1eec6eabf21a4e3dc7.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
        'https://i5.walmartimages.com/asr/ff802918-1387-461c-8491-12a2a7c3391c.e87676408faa436a74ad64419e45150b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
        'https://i5.walmartimages.com/asr/032d94aa-b40a-4611-8eef-804176196b88.3e89e84b13e113363857d8bc32760ebe.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF'
      ],
      title: "Prime Rib Beef Roast, Choice Angus Beef, Bone-In, 1 per Package, 4.0 - 10.0 lb",
      ingredients: {
        ingredients: "Angus Beef",
        activeIngredientName: ""
      },
      aboutItem: {
        nutritionFacts: "Nutrition Facts",
        productDetails: "Experience the richness of our Prime Rib Beef Roast, Choice Angus Beef,"
          + "Bone-In 4.0 - 10.0 lb, any day of the year. This bone-in roast, sourced from premium Angus Choice beef,"
          + "is the perfect centerpiece for your family meals. Its rich, savory flavor and natural tenderness make"
          + "every meal special. Ideal for roasting, it fills your home with a mouthwatering aroma that signals "
          + "a delicious feast. Each serving is packed with 20g of protein, making it a flavorful and wholesome "
          + "choice. Make your meals memorable with our Angus Choice Beef Prime Rib Roast."
          + "Prime Rib Beef Roast, Choice Angus Beef, Bone-In, 1 per Package, 4.0 - 10.0 lb"
          + "One package, ready for your family feast"
          + "Beef bone-in prime rib is vacuum-sealed and net-wrapped, safe for oven roasting to retain flavor"
          + "USDA Choice Angus Beef, known for marbling, tenderness, and flavor"
          + "Ideal for family meals, a delicious centerpiece for your table"
          + "20g of protein per serving, a wholesome choice"
          + "Scroll down for more product details and culinary inspiration"
      },
      aboutBrand: {
        brandName: "Band Name"
      },
      specifications: "Specification",
      customerRatingReviews: [{
        viewerName: 'viewer name',
        viewerRate: 'viewer Rate'
      }],
      price: 69.66
    }];
  product!: Product;
  constructor(private router: Router) { }
  btnItem(product: Product) {
    this.product = product;
  }
}
