import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from '@angular/router';

import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  form: any = {
    username: null,
    password: null
  };
  isLoginFailed = false;
  errorMessage = '';
  username?: string;

  formControl = new FormControl('', [Validators.required])
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {

  }

  ngOnInit() {
    if (!!this.tokenStorage.getToken()) {
      this.router.navigate(['/today']);
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }
}
