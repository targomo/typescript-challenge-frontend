import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { RootState } from 'src/store/app.store'
import { TransitLinesActions } from 'src/store/transit-lines/transit-lines.actions'
import { fromTransitLines } from 'src/store/transit-lines/transit-lines.selectors'
import { TransitStop } from 'src/types/stop'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  lines$: Observable<{ lineId: string; numberOfStops: number; stops: TransitStop[] }[]>

  constructor(private store: Store<RootState>) {
    this.lines$ = store.pipe(select(fromTransitLines.linesList))
  }

  selectStop(selectedStopId: string) {
    this.store.dispatch(TransitLinesActions.SelectStop({ selectedStopId }))
  }
}
