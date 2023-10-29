import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../services/food/foodservice.service';
import { foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private fs: FoodserviceService,
    private activated: ActivatedRoute,
    private cs: CartService
  ) {}
  foods: foods[] = [];
  ngOnInit() {
    this.activated.params.subscribe((param) => {
      if (param['searchItem']) {
        this.foods = this.fs.getAll().filter((food) => {
          return food.name
            .toLowerCase()
            .includes(param['searchItem'].toLowerCase());
        });
      } else if (param['tags']) {
        this.foods = this.fs.getAllFoodByTag(param['tags']);
      } else {
        this.foods = this.fs.getAll();
      }
    });
    this.foods.forEach((a) => {
      Object.assign(a, { quantity: 1, total: a.price });
    });
  }
  addtocart(item: any) {
    this.cs.addtocart(item);
  }
}
