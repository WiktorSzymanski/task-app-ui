import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {List} from "../components/task-list/task-list.component";
import {TokenStorageService} from "./token-storage.service";

const API_URI = 'http://localhost:8080/api/tasks-list';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorageService) {
  }

  getAllTasksLists() {
    return this.httpClient.get(API_URI,
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }

  getTaskListById(listId: string) {
    return this.httpClient.get(API_URI + '/' + listId,
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }

  addTaskList(listId: string, taskList: List) {
    return this.httpClient.post(API_URI, taskList);
  }

  updateTaskList(listId: string, taskList: List) {
    return this.httpClient.patch(API_URI + '/' + listId, taskList);
  }

  deleteTaskList(listId: string) {
    return this.httpClient.delete(API_URI + '/' + listId, {responseType: 'json'});
  }
}
