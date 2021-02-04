import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    { id: 1, productId: 1, productName: 'test1', qty: 2, price: 100},
    { id: 2, productId: 2, productName: 'test2', qty: 3, price: 200},
    { id: 3, productId: 3, productName: 'test3', qty: 4, price: 300},
    { id: 4, productId: 4, productName: 'test4', qty: 5, price: 400},
    { id: 5, productId: 5, productName: 'test5', qty: 6, price: 500}
  ];

  cartTotal = 0;

  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.price * item.qty);
    });
  }

}
