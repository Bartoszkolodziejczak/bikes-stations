import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesStationsComponent } from './containers/bikes-stations/bikes-stations.component';
import { LoadBikesStationsResolver } from './resolvers/load-bikes-stations.resolver';
import { BikeStationComponent } from './containers/bike-station/bike-station.component';
import { LoadBikeStationResolver } from './resolvers/load-bike-station.resolver';

const routes: Routes = [
  {
    path: '',
    component: BikesStationsComponent,
    resolve: {
      bikesStations: LoadBikesStationsResolver
    }
  },
  {
    path: ':id',
    component: BikeStationComponent,
    resolve: {
      bikeStation: LoadBikeStationResolver
    }
  },
  {
    path: '**',
    redirectTo: 'bikes-stations'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    LoadBikesStationsResolver,
    LoadBikeStationResolver
  ]
})
export class BikeStationRoutingModule { }
