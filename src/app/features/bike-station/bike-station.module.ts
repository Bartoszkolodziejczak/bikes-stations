import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeStationRoutingModule } from './bike-station-routing.module';
import * as fromContainers from './containers';
import * as fromComponents from './components';


@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
  ],
  imports: [
    CommonModule,
    BikeStationRoutingModule
  ]
})
export class BikeStationModule { }
