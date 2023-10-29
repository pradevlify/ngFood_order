import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/models/food';
import { tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodserviceService {
  constructor() {}
  getAll(): foods[] {
    return [
      {
        id: 1,
        name: 'burger',
        cooktime: '10 - 20',
        price: 10,
        favorite: false,
        origins: ['italy', 'france'],
        imageUrl: 'assets/burger1.jpg',
        tags: ['fastfood', 'burger'],
      },
      {
        id: 2,
        name: 'burger',
        cooktime: '10 - 20',
        price: 10,
        favorite: false,
        origins: ['italy', 'france'],
        imageUrl: 'assets/burger2.webp',
        tags: ['fastfood', 'pizza'],
      },
      {
        id: 3,
        name: 'cheezy pizza',
        cooktime: '20 - 40',
        price: 20,
        favorite: false,
        origins: ['spain', 'germany'],
        imageUrl: 'assets/cheezypizza.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 4,
        name: 'french fries',
        cooktime: '10 - 20',
        price: 10,
        favorite: false,
        origins: ['paris', 'france', 'spain'],
        imageUrl: 'assets/frenchfries.jpg',
        tags: ['starter'],
      },
      {
        id: 5,
        name: 'meatball',
        cooktime: '10 - 20',
        price: 20,
        favorite: false,
        origins: ['india', 'afganistan', 'china'],
        imageUrl: 'assets/meatball.jpg',
        tags: ['fastfood', 'starter'],
      },
      {
        id: 6,
        name: 'corn pizza',
        cooktime: ' 20 - 40',
        price: 10,
        favorite: false,
        origins: ['spain', 'germay', 'italy'],
        imageUrl: 'assets/pizza1.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 7,
        name: 'pizza combo',
        cooktime: '20 - 40',
        price: 30,
        favorite: false,
        origins: ['spain', 'germany', 'italy'],
        imageUrl: 'assets/burger1.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 8,
        name: 'soup',
        cooktime: '10 - 20',
        price: 10,
        favorite: false,
        origins: ['china', 'korea', 'japan'],
        imageUrl: 'assets/soup.jpg',
        tags: ['starter'],
      },
    ];
  }
  getAllFoodByTag(tag: string): foods[] {
    if (tag == 'All') {
      return this.getAll();
    } else {
      return this.getAll().filter((food) => food.tags.includes(tag));
    }
  }
  getAllTag(): tag[] {
    return [
      { name: 'All' },
      {
        name: 'fastfood',
      },
      {
        name: 'starter',
      },
      { name: 'lunch' },
    ];
  }
}
