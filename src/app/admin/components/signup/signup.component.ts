import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  signupUser(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const user = this.form.value;
      console.log(user);
      this.router.navigate(['./admin/login']);
    }
  }
}
