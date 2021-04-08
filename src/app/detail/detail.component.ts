import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { pluck, shareReplay } from 'rxjs/operators'
import { RootState } from 'src/store/app.store'
import { TransitLinesActions } from 'src/store/transit-lines/transit-lines.actions'
import { fromTransitLines } from 'src/store/transit-lines/transit-lines.selectors'
import { TransitStop } from 'src/types/stop'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  selectedStop$: Observable<TransitStop>
  stopName$: Observable<string>

  constructor(private store: Store<RootState>) {
    this.selectedStop$ = this.store.pipe(select(fromTransitLines.selectedStop), shareReplay(1))
    this.stopName$ = this.selectedStop$.pipe(pluck('name'))
  }

  clearSelection(): void {
    this.store.dispatch(TransitLinesActions.SelectStop({ selectedStopId: null }))
  }
}
