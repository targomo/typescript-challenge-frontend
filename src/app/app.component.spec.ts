import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { Store } from '@ngrx/store'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { RootState } from 'src/store/app.store'
import { fromTransitLines } from 'src/store/transit-lines/transit-lines.selectors'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let mockStore: MockStore<any>
  let dispatchSpy: jest.SpyInstance

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [provideMockStore()],
      declarations: [AppComponent],
    }).compileComponents()

    mockStore = TestBed.inject(Store) as MockStore<RootState>
    mockStore.overrideSelector(fromTransitLines.stopsPointGeoJson, null)
    dispatchSpy = jest.spyOn(mockStore, 'dispatch').mockImplementation(() => {})
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should have a map', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    expect(fixture.componentInstance['map']).toBeTruthy()
    expect(dispatchSpy).toHaveBeenCalled()
  })
})
