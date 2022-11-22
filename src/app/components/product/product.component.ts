import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { StoreService } from 'src/app/services/store.service';

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

  constructor(private store: StoreService) {}

  ngOnInit(): void {}

  onSubmit(quantity: any) {
    console.log(quantity)
    this.store.addProduct({ ...this.product, ...quantity });
  }
}
