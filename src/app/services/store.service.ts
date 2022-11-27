import { Injectable } from '@angular/core';
import { CartProduct } from '../model/cart-product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private cart: CartProduct[] = [];
  public subject = new Subject<CartProduct[]>();

  constructor() {}

  getCart() {
    return this.cart;
  }

  private addToCart(product: CartProduct) {
    if (!product.quantity) {
      alert('please provide quantity before adding to cart');
      return;
    }

    this.cart = this.cart.filter((el) => el.id !== product.id);
    this.cart.push(product);
    alert('Product Added To Cart');
  }

  addProduct(product: CartProduct) {
    this.addToCart(product);
    this.subject.next(this.cart);
  }

  emptyCart() {
    this.cart = [];
    this.subject.next(this.cart);
  }

  removeProduct(id: number) {
    this.cart = this.cart.filter((pro) => pro.id != id);
    this.subject.next(this.cart);
  }
}
