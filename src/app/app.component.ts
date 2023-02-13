import {Component, HostBinding, OnInit} from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";
import {MatDialog} from "@angular/material/dialog";
import {UserPupUpComponent} from "./components/user-pup-up/user-pup-up.component";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";
import {SettingsService} from "./services/settings.service";
import {startWith} from "rxjs";

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

  async ngOnInit() {
    let userData = this.tokenStorage.getUser();

    if (userData.username) {
      this.username = userData.username;
      this.isLoggedIn = true;
      this.settings.initSettings();
    } else {
      this.username = 'sign in';
      this.isLoggedIn = false;
      this.router.navigate(['/sign-in']);
    }


    this.settings.toggleControl.valueChanges.subscribe(val => {
      const classes = this.overlayContainer.getContainerElement().classList;
      const darkModeClass = 'darkMode';
      this.className = val ? darkModeClass : '';
      this.settings.settings.theme = val ? 'dark' : 'light';
      this.settings.setSettings().subscribe(res => {});

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
