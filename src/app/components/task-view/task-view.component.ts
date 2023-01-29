import {Component, OnInit} from '@angular/core';
import {List} from "../task-list/task-list.component";

const EXAMPLE_LIST = {
  id: 'id',
  name: 'name',
  userId: 'userId',
  description: 'description',
}
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit{
  allLists!: List[];

  ngOnInit() {
    this.allLists = [
      EXAMPLE_LIST,
      EXAMPLE_LIST,
      EXAMPLE_LIST
    ]
  }
}
