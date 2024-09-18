import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideEffects } from '@ngrx/effects'
import { provideStore } from '@ngrx/store'
import { effects, reducers } from 'src/store/app.store'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(reducers), provideEffects(effects)],
}
