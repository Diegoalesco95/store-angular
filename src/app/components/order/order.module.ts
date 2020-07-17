import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderInformationComponent } from './components/order-information/order-information.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentInformationComponent } from './components/payment-information/payment-information.component';

@NgModule({
  declarations: [OrderComponent, OrderInformationComponent, PaymentInformationComponent],
  imports: [CommonModule, OrderRoutingModule, SharedModule, MaterialModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, ReactiveFormsModule],
})
export class OrderModule {}
