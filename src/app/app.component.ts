import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  username!: string;
  isLoggedIn: boolean = false;

  constructor(private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    let userData = this.tokenStorage.getUser();

    if (userData.username) {
      this.username = userData.username;
      this.isLoggedIn = true;
    } else {
      this.username = 'sign in';
      this.isLoggedIn = false;
    }
  }
}
