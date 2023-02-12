import {HostBinding, Injectable} from '@angular/core';
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  toggleControl = new FormControl(false);

  constructor() {
  }
}
