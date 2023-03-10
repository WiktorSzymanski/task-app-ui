import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{

  form: any = {
    username: null,
    email: null,
    password: null
  };
  formControl = new FormControl('', [Validators.required])
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit(): void {
    const { username, password, email} = this.form;

    console.log("Form:  ")
    console.log(this.form);

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);

        this.router.navigate(['/sign-in']);
        this.reloadPage();
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }
}
