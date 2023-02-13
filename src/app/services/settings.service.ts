import {Injectable, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "./token-storage.service";

const API_URI = 'http://localhost:8080/api/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService{

  toggleControl = new FormControl(false);
  settings!: Settings;
  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorageService) {
  }

  initSettings(): void {
    console.log('HI FROM SETTING SERVICE')
    this.getSettings().subscribe(res => {
      this.settings = <Settings> res;
      console.log(this.settings)
      if (this.settings.theme == 'dark') {
        this.toggleControl.setValue(true, {emitEvent: true});
      }
    })
  }

  getSettings() {
    return this.httpClient.get(API_URI,
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }

  setSettings() {
    console.log('Set Settings')
    return this.httpClient.patch(API_URI, this.settings,
      {
        headers: {'Authorization' : 'Bearer ' + this.tokenStorage.getToken()},
        responseType: 'json'
      });
  }
}

export class Settings {
  constructor(
    public userId: string,
    public theme: string,
  ) {
  }
}
