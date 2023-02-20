import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {List} from "../task-list/task-list.component";
import {FormControl, Validators} from "@angular/forms";
import {TaskListService} from "../../services/task-list.service";

@Component({
  selector: 'app-task-list-pop-up',
  templateUrl: './task-list-pop-up.component.html',
  styleUrls: ['./task-list-pop-up.component.scss']
})
export class TaskListPopUpComponent implements OnInit{

  public listData?: List;
  public operation!: Function;

  formControl = new FormControl('', [Validators.required])

  constructor(@Inject(MAT_DIALOG_DATA) public data: List,
              private taskListService: TaskListService) {
  }

  ngOnInit(): void {
    if (this.data != null) {
      this.listData = new List(
        this.data.id,
        this.data.name,
        this.data.userId,
        this.data.description
      );
      this.operation = this.editData;
    } else {
      this.listData = new List('', '', '', '');
      this.operation = this.addData;
    }


    console.log(this.listData)
  }

  saveData(): void {
    if (this.listData?.name != '') {
      this.operation();
    }
  }

  editData(): void {
    this.taskListService.updateTaskList(this.listData!.id, this.listData!)
      .subscribe(res => {
        window.location.reload();
      });
  }

  addData(): void {
    this.taskListService.addTaskList(this.listData!.id, this.listData!)
      .subscribe(res => {
        window.location.reload();
      });
  }
}
