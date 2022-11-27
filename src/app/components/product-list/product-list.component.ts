import { Component, EventEmitter, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/model/cart-product';
import { Product } from 'src/app/model/product';
import { HttpService } from 'src/app/services/http.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private http: HttpService, private store: StoreService) {}

  ngOnInit(): void {
    this.http.getData().subscribe((res) => (this.products = res));
  }

  addItem(event: CartProduct) {
    this.store.addProduct(event);
  }
}
