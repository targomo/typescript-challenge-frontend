import { TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  const mapboxMock = jest.mock('mapbox-gl', () => {})

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents()
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
  })
})
