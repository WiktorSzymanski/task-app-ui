import {Component, OnInit} from '@angular/core';
import {List} from "../task-list/task-list.component";
import {TaskListService} from "../../services/task-list.service";
import {MatDialog} from "@angular/material/dialog";
import {TaskListPopUpComponent} from "../task-list-pop-up/task-list-pop-up.component";

const EXAMPLE_LIST = {
  id: 'id',
  name: 'name',
  userId: 'userId',
  description: 'description',
}
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit{
  allLists!: List[];


  constructor(private taskListService: TaskListService, private dialogRef: MatDialog) {}

  ngOnInit() {
    this.taskListService.getAllTasksLists().subscribe(res => {
      this.allLists = <List[]> res;
      console.log(res);
    })
  }

  openListPopup() {
    this.dialogRef.open(TaskListPopUpComponent, {
      data: null
    });
  }
}
