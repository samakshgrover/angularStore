import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartProduct } from 'src/app/model/cart-product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent implements OnInit {
  @Input() item: CartProduct = {
    id: 0,
    quantity: 0,
    name: '',
    url: '',
    price: 0,
    description: '',
  };
  @Output() remove: EventEmitter<number> = new EventEmitter();

  constructor(private store: StoreService) {}

  ngOnInit(): void {}

  // handleClickPlus() {
  //   this.item.quantity++;
  //   this.store.addProduct({ ...this.item });
  // }

  // handleClickMinus() {
  //   if (this.item.quantity > 1) {
  //     this.item.quantity--;
  //     this.store.addProduct({ ...this.item });
  //   }
  // }

  removeItem() {
    this.remove.emit(this.item.id);
  }

  handleChange(event: number) {
    if (event < 0) {
      this.item.quantity = this.item.quantity * -1;
    }

    if (event === 0) {
      this.removeItem();
    }

    this.store.addProduct({ ...this.item });
  }
}
