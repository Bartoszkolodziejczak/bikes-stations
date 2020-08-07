import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesStationsComponent } from './containers/bikes-stations/bikes-stations.component';
import { LoadBikesStationsResolver } from './resolvers/load-bikes-stations.resolver';

const routes: Routes = [
  {
    path: '',
    component: BikesStationsComponent,
    resolve: {
      bikesStations: LoadBikesStationsResolver
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
  providers: [LoadBikesStationsResolver]
})
export class BikeStationRoutingModule { }
