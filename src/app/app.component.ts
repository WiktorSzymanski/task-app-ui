import {Component, HostBinding, OnInit} from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";
import {MatDialog} from "@angular/material/dialog";
import {UserPupUpComponent} from "./components/user-pup-up/user-pup-up.component";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";
import {SettingsService} from "./services/settings.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  username!: string;
  isLoggedIn: boolean = false;


  @HostBinding('class') className ='';

  constructor(private tokenStorage: TokenStorageService,
              private dialogRef: MatDialog,
              private router: Router,
              private overlayContainer: OverlayContainer,
              public settings: SettingsService) {
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

    const darkModeClass = 'darkMode';
    this.settings.toggleControl.valueChanges.subscribe(val => {
      this.className = val ? darkModeClass : '';

      const classes = this.overlayContainer.getContainerElement().classList;

      if (val) {
        classes.add(darkModeClass);
      } else {
        classes.remove(darkModeClass);
      }
    })
  }

  openUserPopup() {
    this.dialogRef.open(UserPupUpComponent);
  }
}
