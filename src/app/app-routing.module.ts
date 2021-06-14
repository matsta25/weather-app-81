import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './componet/start/start.component';
import {SelectCityComponent} from './componet/select-city/select-city.component';
import {ShowWeatherComponent} from './componet/show-weather/show-weather.component';
import {PageNotFoundComponent} from './componet/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'select-city',
    component: SelectCityComponent
  },
  {
    path: 'show-weather',
    component: ShowWeatherComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
