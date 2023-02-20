import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Task } from '../components/task/task.component';
import {TokenStorageService} from "./token-storage.service";

const API_URI = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorageService) { }

  getAllFiles() {
    return this.httpClient.get(API_URI + '/files',
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }

  addFile(file: File, filename: string, taskId: string) {
    const formData = new FormData();
    formData.set('file', file);
    formData.set('filename', filename);
    formData.set('taskId', taskId);
    return this.httpClient.post(API_URI + '/files', formData,
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }

  deleteTask(id: string) {
    return this.httpClient.delete(API_URI + '/files/' + id,
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }
}
