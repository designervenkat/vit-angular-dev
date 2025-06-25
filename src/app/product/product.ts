import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../services/product-services';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  products: any[] = [];
  product: any = {};

  constructor(private productService: ProductServices) {}

  ngOnInit(): void {
    this.productService
      .getAllProducts()
      .subscribe((res) => (this.products = res.products));

    this.productService
      .getProductByDetails(10)
      .subscribe((res) => (this.product = res));
  }
}

//   products = [
//     {
//       title: 'Handmade Bronze Salad',
//       desc: 'Discover the overdue new Car with an exciting mix of Ceramic ingredients',
//       price: '256.85',
//       image: 'https://picsum.photos/seed/jF5IPlpsST/586/2909?blur=10',
//       id: '1',
//     },
//     {
//       title: 'Recycled Metal Bike',
//       desc: 'New Chair model with 80 GB RAM, 433 GB storage, and muddy features',
//       price: '11.70',
//       image: 'https://picsum.photos/seed/XHIz404Ya/1521/3185?grayscale&blur=1',
//       id: '2',
//     },
//     {
//       title: 'Tasty Plastic Table',
//       desc: 'Professional-grade Towels perfect for velvety training and recreational use',
//       price: '568.39',
//       image: 'https://picsum.photos/seed/9gM9myRQU/3053/2637?blur=7',
//       id: '3',
//     },
//   ];
