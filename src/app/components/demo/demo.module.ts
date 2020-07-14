import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './components/demo/demo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoComponent],
  imports: [FormsModule, CommonModule, SharedModule, DemoRoutingModule],
})
export class DemoModule {}
