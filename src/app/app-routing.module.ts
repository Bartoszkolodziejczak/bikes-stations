import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bikes-stations'
  },
  {
    path: 'bikes-stations',
    loadChildren: () => import('./features/bike-station/bike-station.module').then(m => m.BikeStationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
