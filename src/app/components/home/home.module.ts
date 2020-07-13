import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [BannerComponent, HomeComponent],
  imports: [HomeRoutingModule],
})
export class HomeModule {}
