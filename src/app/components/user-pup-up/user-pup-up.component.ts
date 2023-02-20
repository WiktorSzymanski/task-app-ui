import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-user-pup-up',
  templateUrl: './user-pup-up.component.html',
  styleUrls: ['./user-pup-up.component.scss']
})
export class UserPupUpComponent implements OnInit{

  username!: string;

  constructor(private tokenStorage: TokenStorageService, public settings: SettingsService) {
  }

  ngOnInit(): void {
    this.username = this.tokenStorage.getUser().username;
  }


  signOut() {
    this.tokenStorage.logout();
    window.location.reload();
  }
}
