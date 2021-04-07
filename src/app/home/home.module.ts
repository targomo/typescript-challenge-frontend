import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatRippleModule } from '@angular/material/core'
import { MatListModule } from '@angular/material/list'
import { HomeComponent } from './home.component'

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, MatListModule, MatRippleModule],
})
export class HomeModule {}
