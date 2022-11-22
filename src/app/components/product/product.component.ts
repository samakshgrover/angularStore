import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { NgModel } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  quantity: number = 0;

  constructor(private store: StoreService) {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    this.store.addToList({ ...this.product, ...form });
    this.store.subject.next(this.store.getList());
  }
}
