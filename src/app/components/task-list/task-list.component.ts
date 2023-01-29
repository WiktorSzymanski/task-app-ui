import {Component, OnInit} from '@angular/core';
import { Task } from '../task/task.component';

const EXAMPLE_TASK = {
  id: 'id',
  name: 'name',
  created: new Date(),
  listId: 'listId',
  dueTo: new Date(),
  description: 'description',
  done: false
}

const EXAMPLE_LIST = {
  id: 'id',
  name: 'name',
  userId: 'userId',
  description: 'description',
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  list!: List;
  allTasks!: Task[];
  ngOnInit() {
    this.list = new List(EXAMPLE_LIST.id, EXAMPLE_LIST.name, EXAMPLE_LIST.userId, EXAMPLE_LIST.description)
    this.allTasks = [
      EXAMPLE_TASK,
      EXAMPLE_TASK,
      EXAMPLE_TASK
    ]
  }
}

export class List {
  constructor(
    public id: string,
    public name: string,
    public userId: string,
    public description?: string
  ) {
  }
}
