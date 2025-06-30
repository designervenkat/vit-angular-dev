import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../services/product-services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink],
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
      .subscribe((res) => (this.products = res));
  }
}
