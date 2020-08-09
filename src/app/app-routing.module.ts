import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

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
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
