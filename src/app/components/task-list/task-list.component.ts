import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../task/task.component';
import {TaskService} from "../../services/task.service";
import {TaskListService} from "../../services/task-list.service";
import {MatDialog} from "@angular/material/dialog";
import {TaskListPopUpComponent} from "../task-list-pop-up/task-list-pop-up.component";
import {TaskPopUpComponent} from "../task-pop-up/task-pop-up.component";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{
  @Input() list!: List;
  allTasks?: Task[];

  constructor(private taskListService: TaskListService, private taskService: TaskService, private dialogRef: MatDialog) {
  }
  ngOnInit() {
    this.taskService.getAllTasks(this.list.id).subscribe(res => {
      this.allTasks = <Task[]> res;
      console.log(res);
    })
  }

  deleteList() {
    console.log("Pressed button to delete list with id: " + this.list.id)
    this.taskListService.deleteTaskList(this.list.id).subscribe(res => {
      window.location.reload();
    });
  }

  openListPopup() {
    this.dialogRef.open(TaskListPopUpComponent, {
      data: this.list
    });
  }

  openTaskPopup() {
    this.dialogRef.open(TaskPopUpComponent, {
      data: new Task('','', new Date(), this.list.id, false)
    });
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
