import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServices } from '../services/product-services';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
  standalone: true,
})
export class ProductDetails implements OnInit {
  product: any = {};

  private route = inject(ActivatedRoute);
  private productService = inject(ProductServices);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductByDetails(+id).subscribe({
        next: (data) => (this.product = data),
        error: (err) => console.log('Product not found:', err),
      });
    }
  }
}
