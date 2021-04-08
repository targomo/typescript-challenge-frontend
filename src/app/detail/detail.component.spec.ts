import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Store } from '@ngrx/store'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { RootState } from 'src/store/app.store'
import { fromTransitLines } from 'src/store/transit-lines/transit-lines.selectors'

import { DetailComponent } from './detail.component'
import { DetailModule } from './detail.module'

describe('DetailComponent', () => {
  let component: DetailComponent
  let fixture: ComponentFixture<DetailComponent>
  let mockStore: MockStore<any>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailModule],
      providers: [provideMockStore()],
    }).compileComponents()

    mockStore = TestBed.inject(Store) as MockStore<RootState>
    mockStore.overrideSelector(fromTransitLines.selectedStop, { name: 'fake stop' } as any)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
