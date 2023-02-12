import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";
import {TaskPopUpComponent} from "../task-pop-up/task-pop-up.component";
import {MatDialog} from "@angular/material/dialog";
import {TaskService} from "../../services/task.service";


const EXAMPLE_TASK = {
  id: 'id',
  name: 'name',
  created: new Date(),
  listId: 'listId',
  dueTo: new Date(),
  description: 'description',
  done: false
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @ViewChild(MatAccordion) accordion?: MatAccordion;
  @Input() task!: Task;

  constructor(private dialogRef: MatDialog, private taskService: TaskService) {
  }

  ngOnInit() {
    // this.task = new Task(
    //   EXAMPLE_TASK.id,
    //   EXAMPLE_TASK.name,
    //   EXAMPLE_TASK.created,
    //   EXAMPLE_TASK.listId,
    //   EXAMPLE_TASK.done,
    //   EXAMPLE_TASK.dueTo,
    //   EXAMPLE_TASK.description
    // )
  }

  checkTask() {
    this.task!.done = !this.task!.done;
    this.taskService.updateTask(this.task.listId, this.task).subscribe(res => {})
  }

  deleteTask() {
    console.log("Pressed button to delete task with id: " + this.task.id)
    this.taskService.deleteTask(this.task.listId, this.task.id).subscribe(res => {
      window.location.reload();
    });
  }

  openTaskPopup() {
    this.dialogRef.open(TaskPopUpComponent, {
      data: this.task
    });
  }
}

export class Task {
  constructor(
    public id: string,
    public name: string,
    public created: Date,
    public listId: string,
    public done: boolean,
    public dueTo?: Date,
    public description?: string,
  ) {
  }
}
