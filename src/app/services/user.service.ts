import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_URI = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getPublicContent() {
    return this.httpClient.get(API_URI + 'all', {responseType: 'text'});
  }

  getUserBoard() {
    return this.httpClient.get(API_URI + 'user', {responseType: 'text'});
  }

  getModeratorBoard() {
    return this.httpClient.get(API_URI + 'mod', {responseType: 'text'});
  }

  getAdminBoard() {
    return this.httpClient.get(API_URI + 'admin', {responseType: 'text'});
  }
}
