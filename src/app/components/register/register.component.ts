import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  isLoading: boolean = false;
  errorMessage: string = '';
  constructor(
    private _RegisterService: RegisterService,
    private _Router: Router
  ) {}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern(
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      ),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.minLength(11),
      Validators.pattern(/[01][0125][0-9]{8}$/),
    ]),
  });

  handleRegister(registerForm: FormGroup) {
    this.isLoading = true;
    console.log(registerForm.value);
    this._RegisterService.register(registerForm.value).subscribe({
      next: (res) => {
        if (res.message === 'success') {
          this._Router.navigate(['/login']);
          this.isLoading = false;
        }
      },
      error: (err) => {
        this.errorMessage = err.error.errors.msg;
        this.isLoading = false;
      },
    });
  }
}
