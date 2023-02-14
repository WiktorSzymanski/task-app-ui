import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Task } from '../components/task/task.component';
import {TokenStorageService} from "./token-storage.service";

const API_URI = 'http://localhost:8080/api/tasks-list';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorageService) { }

  getAllTasks(listId: string) {
    return this.httpClient.get(API_URI + '/' + listId + '/tasks',
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }

  getTodayTasks() {
    return this.httpClient.get(API_URI + '/today',
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }

  getTaskById(listId: string, id: string) {
    return this.httpClient.get(API_URI + '/' + listId + '/tasks' + id,
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }

  addTask(listId: string, task: Task) {
    return this.httpClient.post(API_URI + '/' + listId + '/tasks', task,
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }

  updateTask(listId: string, task: Task) {
    return this.httpClient.patch(API_URI + '/' + listId + '/tasks/' + task.id, task,
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }

  deleteTask(listId: string, id: string) {
    return this.httpClient.delete(API_URI + '/' + listId + '/tasks/' + id,
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }
}
