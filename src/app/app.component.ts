import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { GeoJSONSource, Map } from 'mapbox-gl'
import { MARKER_PAINT } from 'src/constants/marker-paint'
import { u9 } from 'src/constants/u9'
import { RootState } from 'src/store/app.store'
import { TransitLinesActions } from 'src/store/transit-lines/transit-lines.actions'
import { fromTransitLines } from 'src/store/transit-lines/transit-lines.selectors'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('map', { static: true }) private mapRef: ElementRef<HTMLElement>

  private map: Map

  constructor(private store: Store<RootState>) {
    // Issue https://github.com/targomo/typescript-challenge-frontend/issues/3
    this.store.dispatch(TransitLinesActions.AddLine({ lineId: 'u9', line: u9 }))
  }

  ngOnInit() {
    this.map = new Map({
      center: { lat: 52.52, lng: 13.4 },
      zoom: 10,
      container: this.mapRef.nativeElement,
      style: 'https://maps.targomo.com/styles/positron-gl-style.json',
    })

    this.map.once('load', () => {
      const stopsSource$ = this.store.pipe(select(fromTransitLines.stopsPointGeoJson))
      const STOPS_SOURCE_ID = 'stops-source'

      stopsSource$.subscribe((source) => {
        const exsitingSource = <GeoJSONSource>this.map.getSource(STOPS_SOURCE_ID)
        if (exsitingSource) {
          exsitingSource.setData(source.data)
        } else {
          this.map.addSource(STOPS_SOURCE_ID, source)
        }
      })

      const STOPS_LAYER_ID = 'stops-layer'
      this.map.addLayer({ type: 'circle', source: STOPS_SOURCE_ID, id: STOPS_LAYER_ID, paint: MARKER_PAINT })

      // The following issues are likely to be implemented here
      // https://github.com/targomo/typescript-challenge-frontend/issues/2
      // https://github.com/targomo/typescript-challenge-frontend/issues/2
      // https://github.com/targomo/typescript-challenge-frontend/issues/6
      // https://github.com/targomo/typescript-challenge-frontend/issues/8/
    })
  }
}
