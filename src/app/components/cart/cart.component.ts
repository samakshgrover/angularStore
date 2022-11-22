import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/model/cart-product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: CartProduct[] = this.store.getList();
  cart2: CartProduct[] = [];
  length: number = this.cart.length;
  total: number = this.cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.store.subject.subscribe({
      next: (res) => (this.cart2 = res),
    });
  }

  removeAll() {
    console.log('clicked');
    this.store.removeAll();
    this.cart = this.store.getList();
    this.length = this.cart.length;
    this.total = this.cart.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0);
  }
}
