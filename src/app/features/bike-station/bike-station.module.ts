import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeStationRoutingModule } from './bike-station-routing.module';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
  ],
  imports: [
    CommonModule,
    BikeStationRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['geometry']
    })
  ],
})
export class BikeStationModule { }
