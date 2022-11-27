import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/model/cart-product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: CartProduct[] = this.store.getCart();
  length: number = this.cart.length;
  total: number = this.cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.store.subject.subscribe({
      next: (res) => {
        this.cart = res;
        this.length = this.cart.length;
        this.total = parseFloat(
          this.cart
            .reduce((acc, curr) => {
              return acc + curr.quantity * curr.price;
            }, 0)
            .toFixed(2)
        );
      },
    });
  }

  removeAllProducts() {
    console.log('clicked');
    this.store.emptyCart();
  }

  removeProduct(event: number) {
    // console.log('clicked');
    this.store.removeProduct(event);
  }
}
