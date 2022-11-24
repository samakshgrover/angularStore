import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    url: '',
    description: '',
    price: 0,
  };
  quantity: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpService,
    private store: StoreService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((data) => this.http.getProduct(data)))
      .subscribe((data) => {
        this.product = data;
        let temp = this.store
          .getCart()
          .filter((el) => el.id == this.product.id);
        if (temp.length) {
          this.quantity = temp[0].quantity;
        }
      });
  }

  addToCart() {
    console.log(this.quantity)
    this.store.addProduct({ ...this.product, quantity: this.quantity });
  }

  goToProducts() {
    this.router.navigate(['/']);
  }
}
