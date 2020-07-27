import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  loginUser(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const user = this.form.value;
      this.authService
        .login(user.email, user.password)
        .then(() => this.router.navigate(['./admin/dashboard']))
        .catch(() => {
          alert('User invalid');
        });
    }
  }

  loginApi() {
    this.authService
      .loginRestApi('johndoe@mail.com', '1234')
      .subscribe((data) => {
        // console.log(data);
      });
  }
}
