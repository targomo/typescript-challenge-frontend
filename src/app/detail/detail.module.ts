import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { DetailComponent } from './detail.component'

@NgModule({
  declarations: [DetailComponent],
  exports: [DetailComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class DetailModule {}
