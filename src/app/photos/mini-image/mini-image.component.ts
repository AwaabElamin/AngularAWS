import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mini-image',
  templateUrl: './mini-image.component.html',
  styleUrls: ['./mini-image.component.css']
})
export class MiniImageComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['url'];
      // Use the product ID to fetch data or perform other actions
    });
  }
}
