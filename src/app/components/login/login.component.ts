import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private _RegisterService: RegisterService,
    private _Router: Router
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  handleLogin(loginForm: FormGroup) {
    this.isLoading = true;
    console.log(loginForm);
    this._RegisterService.login(loginForm.value).subscribe({
      next: (res) => {
        if (res.message == "success") {
          this.isLoading = false;
          localStorage.setItem('userToken', res.token);
          this._RegisterService.decodeUserInfo();
          this._Router.navigate(['/home']);
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage=err.error.message;
        
      },
    });
  }
}
