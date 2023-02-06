import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Task } from '../components/task/task.component';

const API_URI = 'http://localhost:8080/api/tasks-list';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  getAllTasks(listId: string) {
    return this.httpClient.get(API_URI + '/' + listId, {responseType: 'text'});
  }

  getTaskById(listId: string, id: string) {
    return this.httpClient.get(API_URI + '/' + listId + '/' + id, {responseType: 'text'});
  }

  addTask(listId: string, task: Task) {
    return this.httpClient.post(API_URI + '/' + listId, task);
  }

  updateTask(listId: string, task: Task) {
    return this.httpClient.patch(API_URI + '/' + listId, task);
  }

  deleteTask(listId: string, id: string) {
    return this.httpClient.delete(API_URI + '/' + listId + '/' + id, {responseType: 'text'});
  }
}
