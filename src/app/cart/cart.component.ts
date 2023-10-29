import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  product: any = [];
  grandtotal!: number;
  constructor(private cs: CartService) {}
  ngOnInit() {
    this.cs.getProduct().subscribe((a) => {
      this.product = a;
      this.grandtotal = this.cs.gettotalprice();
    });
  }
  removeItem(item: any) {
    this.cs.removecart(item);
  }
  removeAll() {
    this.cs.removeAll();
  }
}
