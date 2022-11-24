import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  @Input() total: number = 0;
  user = {
    name: '',
    address: '',
    creditCard: '',
  };

  constructor(private router: Router) {}

  handleSubmit(form: any) {
    console.log(this.user.name, this.total);
    console.log(form.value)
    this.router.navigate(['confirm', form.value.name, this.total]);
    console.log('submitted!');
  }
}
