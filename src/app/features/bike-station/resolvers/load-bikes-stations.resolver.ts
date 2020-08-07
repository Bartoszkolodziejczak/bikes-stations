import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BikeStation } from '../../../core/models/bike-station';
import { BikeStationService } from '../../../core/services/http/bike-station.service';
import { Observable, of } from 'rxjs';
import { Feature } from '../../../core/models/feature';
import { catchError, map, take } from 'rxjs/operators';

@Injectable()
export class LoadBikesStationsResolver implements Resolve<BikeStation[]> {

  constructor(private bikesStationService: BikeStationService) {
  }

  resolve(): Observable<BikeStation[]> {

    const checkCacheFeatureIsExists: boolean = this.bikesStationService.checkCacheFeatureIsExists();
    if (checkCacheFeatureIsExists) {
      return this.bikesStationService.cacheFeature$.pipe(
        take(1),
        map((data: Feature) => data.features),
        catchError(error => {
          console.log('error', error);
          return of([]);
        })
      );
    } else {
      return this.bikesStationService.getBikesStations().pipe(
        map((data: Feature) => data.features),
        catchError(error => {
          console.log('error', error);
          return of([]);
        })
      );
    }

  }


}