import { Component } from '@angular/core';
import {List} from "../task-list/task-list.component";

const EXAMPLE_LIST = {
  id: 'id',
  name: 'name',
  userId: 'userId',
  description: 'description',
}
@Component({
  selector: 'app-today-view',
  templateUrl: './today-view.component.html',
  styleUrls: ['./today-view.component.css']
})
export class TodayViewComponent {
  allLists!: List[];

  ngOnInit() {
    this.allLists = [
      EXAMPLE_LIST,
      EXAMPLE_LIST,
      EXAMPLE_LIST
    ]
  }
}
