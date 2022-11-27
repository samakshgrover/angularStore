import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/model/cart-product';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
  };
  quantity: number = 0;
  @Output() add: EventEmitter<CartProduct> = new EventEmitter();

  constructor( private router: Router) {}

  ngOnInit(): void {}

  onSubmit(quantity: number) {
    if (quantity < 0) quantity = quantity * -1;
    this.add.emit({ ...this.product, quantity });
  }

  imageClick() {
    this.router.navigate(['/productDetail', this.product.id]);
  }
}
