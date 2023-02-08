import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";


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
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @ViewChild(MatAccordion) accordion?: MatAccordion;
  @Input() task!: Task;

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
