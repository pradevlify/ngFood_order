import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  totalitem!: number;
  constructor(private cs: CartService) {}
  ngOnInit() {
    this.cs.getProduct().subscribe((a) => (this.totalitem = a.length));
  }
}
