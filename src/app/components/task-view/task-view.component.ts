import {Component, OnInit} from '@angular/core';
import {List} from "../task-list/task-list.component";
import {TaskListService} from "../../services/task-list.service";
import {TaskService} from "../../services/task.service";

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


  constructor(private taskListService: TaskListService, private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskListService.getAllTasksLists().subscribe(res => {
      console.log(res);
    })
    //
    // this.allLists = [
    //   EXAMPLE_LIST,
    //   EXAMPLE_LIST,
    //   EXAMPLE_LIST
    // ]
  }
}
