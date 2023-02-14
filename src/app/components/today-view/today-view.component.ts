import { Component } from '@angular/core';
import {Task} from "../task/task.component";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-today-view',
  templateUrl: './today-view.component.html',
  styleUrls: ['./today-view.component.scss']
})
export class TodayViewComponent {
  todayTasks?: Task[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTodayTasks().subscribe(res => {
      this.todayTasks = <Task[]> res;
      console.log(res);
    })
  }
}
