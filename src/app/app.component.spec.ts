import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Store } from '@ngrx/store'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { u9 } from 'src/constants/u9'
import { RootState } from 'src/store/app.store'
import { TransitLinesActions } from 'src/store/transit-lines/transit-lines.actions'
import { fromTransitLines } from 'src/store/transit-lines/transit-lines.selectors'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent
  let mockStore: MockStore<any>
  let dispatchSpy: jest.SpyInstance

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideMockStore()],
    }).compileComponents()

    mockStore = TestBed.inject(Store) as MockStore<RootState>
    mockStore.overrideSelector(fromTransitLines.stopsPointGeoJson, null)
    dispatchSpy = jest.spyOn(mockStore, 'dispatch')

    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  test('should create the app', () => {
    expect(component).toBeTruthy()
  })

  test('should add a line on init', () => {
    expect(dispatchSpy).toHaveBeenCalledWith(TransitLinesActions.AddLine({ line: u9 }))
  })

  test('should have a map', () => {
    expect(component['map']).toBeTruthy()
  })
})
