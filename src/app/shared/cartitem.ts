import { foods } from './models/food';

export class cartitem {
  [x: string]: any;
  food!: foods;
  quantity: number = 1;
  get price() {
    return this.food.price * this.quantity;
  }
}
