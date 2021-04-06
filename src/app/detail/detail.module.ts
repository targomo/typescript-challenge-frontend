import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DetailComponent } from './detail.component'

@NgModule({
  declarations: [DetailComponent],
  exports: [DetailComponent],
  imports: [CommonModule],
})
export class DetailModule {}
