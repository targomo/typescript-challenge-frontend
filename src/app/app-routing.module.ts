import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailComponent } from './detail/detail.component'
import { DetailModule } from './detail/detail.module'
import { HomeComponent } from './home/home.component'
import { HomeModule } from './home/home.module'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'detail/:id', component: DetailComponent },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule, DetailModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
