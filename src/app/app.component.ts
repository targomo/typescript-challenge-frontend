import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Map } from 'mapbox-gl'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('map', { static: true }) private mapRef: ElementRef<HTMLElement>

  private map: Map

  constructor() {}

  ngOnInit() {
    this.map = new Map({
      center: { lat: 52.52, lng: 13.4 },
      zoom: 10,
      container: this.mapRef.nativeElement,
      style: 'https://maps.targomo.com/styles/positron-gl-style.json',
    })
  }
}
