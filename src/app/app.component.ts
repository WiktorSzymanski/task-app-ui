import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";
import {MatDialog} from "@angular/material/dialog";
import {UserPupUpComponent} from "./components/user-pup-up/user-pup-up.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  username!: string;
  isLoggedIn: boolean = false;

  constructor(private tokenStorage: TokenStorageService, private dialogRef: MatDialog, private router: Router) {
  }

  ngOnInit() {
    let userData = this.tokenStorage.getUser();

    if (userData.username) {
      this.username = userData.username;
      this.isLoggedIn = true;
    } else {
      this.username = 'sign in';
      this.isLoggedIn = false;
      this.router.navigate(['/sign-in']);
    }
  }

  openUserPopup() {
    this.dialogRef.open(UserPupUpComponent);
  }
}
