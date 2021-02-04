import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[] = [
    new Product(1, 'product1', 'This is cool!', 100),
    new Product(2, 'product2', 'This is cool!', 200),
    new Product(3, 'product3', 'This is cool!', 300),
    new Product(4, 'product4', 'This is cool!', 400),
    new Product(5, 'product5', 'This is cool!', 500),
    new Product(6, 'product6', 'This is cool!', 600),
    new Product(7, 'product7', 'This is cool!', 700),
    new Product(8, 'product8', 'This is cool!', 800),
    ];
  constructor() {}
    // populate products from an API
    getProducts(): Product[] {
      return this.products;
  }
}
