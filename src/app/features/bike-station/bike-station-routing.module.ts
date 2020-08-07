import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesStationsComponent } from './containers/bikes-stations/bikes-stations.component';

const routes: Routes = [
  {
    path: '',
    component: BikesStationsComponent
  },
  {
    path: '**',
    redirectTo: 'bikes-stations'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikeStationRoutingModule { }
