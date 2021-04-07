import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatRippleModule } from '@angular/material/core'
import { MatIconModule } from '@angular/material/icon'
import { HomeComponent } from './home.component'

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, MatIconModule],
})
export class HomeModule {}
