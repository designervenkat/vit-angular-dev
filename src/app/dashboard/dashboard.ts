import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductServices } from '../services/product-services';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  product: Product = {
    id: '',
    title: '',
    description: '',
    price: '0',
    image: '',
  };

  constructor(
    private productService: ProductServices,
    private router: Router
  ) {}

  handleLogout() {
    localStorage.removeItem('isLoggedIn');
    location.href = '/login';
  }

  onSubmit() {
    this.productService.addProduct(this.product).subscribe({
      next: (response) => {
        console.log('Response :', response);
        this.product = {
          id: '',
          title: '',
          description: '',
          price: '',
          image: '',
        };
        this.router.navigate(['/products']);
      },
      error: (err) => console.log('Error adding product:', err),
    });
  }
}
