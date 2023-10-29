import { Component, OnInit } from '@angular/core';
import { tag } from '../shared/models/tag';
import { FoodserviceService } from '../services/food/foodservice.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  tags: tag[] = [];
  constructor(private fs: FoodserviceService) {}
  ngOnInit() {
    this.tags = this.fs.getAllTag();
  }
}
