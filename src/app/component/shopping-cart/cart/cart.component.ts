import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    // { id: 1, productId: 1, productName: 'test1', qty: 2, price: 100},
    // { id: 2, productId: 2, productName: 'test2', qty: 3, price: 200},
    // { id: 3, productId: 3, productName: 'test3', qty: 4, price: 300},
    // { id: 4, productId: 4, productName: 'test4', qty: 5, price: 400},
    // { id: 5, productId: 5, productName: 'test5', qty: 6, price: 500},
  ];

  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }
  // tslint:disable-next-line:typedef
  addProductToCart(product: Product){

    let productExists = false;
    for(let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }

    if(!productExists){
      this.cartItems.push({
            productId: product.id,
            productName: product.name,
            qty: 1,
            price: product.price
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach(item => {
        this.cartTotal += (item.price * item.qty)
      });
    }
}
