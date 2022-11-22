import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/model/cart-product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent {
  @Input() item: CartProduct = {
    id: 0,
    quantity: 0,
    name: '',
    url: '',
    price: 0,
    description: '',
  };

  constructor(private store: StoreService) {}

  increese() {
    this.item.quantity++;
    this.store.addToList(this.item);
  }

  decreese() {
    if (this.item.quantity > 0) {
      this.item.quantity--;
      this.store.addToList(this.item);
      // this.store.changeQuantity(this.item.id, this.item.quantity);
    }
  }
}
