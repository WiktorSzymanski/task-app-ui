import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Task} from "../task/task.component";
import {FormControl, Validators} from "@angular/forms";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-list-pop-up',
  templateUrl: './task-pop-up.component.html',
  styleUrls: ['./task-pop-up.component.css']
})
export class TaskPopUpComponent implements OnInit{

  public taskData?: Task;
  public operation!: Function;


  formControl = new FormControl('', [Validators.required])

  constructor(@Inject(MAT_DIALOG_DATA) public data: Task,
              private taskService: TaskService) {
  }

  ngOnInit(): void {
    if (this.data.name != '') {
      this.operation = this.editData;
    } else {
      this.operation = this.addData;
    }
    this.taskData = new Task(
      this.data.id,
      this.data.name,
      this.data.created,
      this.data.listId,
      this.data.done,
      this.data.dueTo,
      this.data.description
    );


    console.log(this.taskData)
  }

  saveData(): void {
    console.log(this.taskData)
    if (this.taskData?.name != '') {
      this.operation();
    }
  }

  editData(): void {
    this.taskService.updateTask(this.taskData!.listId, this.taskData!)
      .subscribe(res => {
        window.location.reload();
      });
  }

  addData(): void {
    this.taskService.addTask(this.taskData!.listId, this.taskData!)
      .subscribe(res => {
        window.location.reload();
      });
  }
}
