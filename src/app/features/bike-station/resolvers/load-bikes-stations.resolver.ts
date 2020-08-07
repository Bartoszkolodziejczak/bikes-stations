import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BikeStation } from '../../../core/models/bike-station';
import { BikeStationService } from '../../../core/services/http/bike-station.service';
import { Observable } from 'rxjs';
import { Feature } from '../../../core/models/feature';
import { map } from 'rxjs/operators';

@Injectable()
export class LoadBikesStationsResolver  implements Resolve<BikeStation[]>{

  constructor(private bikesStationService: BikeStationService) {
  }

  resolve(): Observable<BikeStation[]> {
    return this.bikesStationService.getBikesStations().pipe(
      map((data: Feature) => data.features)
    );
  }


}
