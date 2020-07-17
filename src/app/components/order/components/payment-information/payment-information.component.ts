import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss'],
})
export class PaymentInformationComponent {
  addressForm = this.fb.group({
    cardNumber: [null, Validators.required],
    date: [null, Validators.required],
    cvc: [null, Validators.required],
    name: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
