import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Store } from '@ngrx/store'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { RootState } from 'src/store/app.store'
import { fromTransitLines } from 'src/store/transit-lines/transit-lines.selectors'
import { HomeComponent } from './home.component'
import { HomeModule } from './home.module'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>
  let mockStore: MockStore<any>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeModule],
      providers: [provideMockStore()],
    }).compileComponents()

    mockStore = TestBed.inject(Store) as MockStore<RootState>
    mockStore.overrideSelector(fromTransitLines.linesList, [])
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
