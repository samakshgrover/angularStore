import { Injectable } from '@angular/core';
import { CartProduct } from '../model/cart-product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private list: CartProduct[] = [];
  public subject = new Subject<CartProduct[]>();

  constructor() {}

  notify(product: CartProduct) {
    this.addToList(product);
    this.subject.next(this.list);
  }

  getList() {
    return this.list;
  }

  changeQuantity(id: number, quant: number): void {
    this.list.forEach((el) => {
      if (el.id === id) {
        el.quantity = quant;
        return;
      }
    });
  }

  addToList(product: CartProduct) {
    if (product.quantity == 0) {
      alert('please provide quantity before adding to cart');
      console.log(this.getList());
      return;
    }

    this.list = this.list.filter((el) => el.id !== product.id);

    this.list.push(product);
    console.log(this.getList());
  }

  removeAll() {
    this.list = [];
  }
}
