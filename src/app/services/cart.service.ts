import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cartItemlist: any = [];
  productlist = new BehaviorSubject([]);
  getProduct() {
    return this.productlist.asObservable();
  }
  setProduct(product: any) {
    this.cartItemlist.push(...product);
    this.productlist.next(product);
  }
  addtocart(product: any) {
    this.cartItemlist.push(product);
    this.productlist.next(this.cartItemlist);
    this.gettotalprice();
    console.log(this.cartItemlist);
  }
  gettotalprice() {
    let grandtotal = 0;
    this.cartItemlist.map((a: any) => {
      grandtotal += a.total;
    });
    return grandtotal;
  }
  removecart(product: any) {
    this.cartItemlist.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemlist.splice(index, 1);
      }
      this.productlist.next(this.cartItemlist);
    });
  }
  removeAll() {
    this.cartItemlist = [];
    this.productlist.next(this.cartItemlist);
  }
}
