import { Routes } from '@angular/router'
import { DetailComponent } from './detail/detail.component'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'detail', component: DetailComponent },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
]
