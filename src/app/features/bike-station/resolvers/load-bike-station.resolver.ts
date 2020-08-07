import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { BikeStation } from '../../../core/models/bike-station';
import { BikeStationService } from '../../../core/services/http/bike-station.service';
import { Observable, of } from 'rxjs';
import { Feature } from '../../../core/models/feature';
import { catchError, map, take } from 'rxjs/operators';

@Injectable()
export class LoadBikeStationResolver implements Resolve<BikeStation> {

  constructor(private bikesStationService: BikeStationService) {
  }


  resolve(route: ActivatedRouteSnapshot): Observable<BikeStation> {

    const stationId: string = route.params.id;
    const checkCacheFeatureIsExists: boolean = this.bikesStationService.checkCacheFeatureIsExists();

    if (checkCacheFeatureIsExists) {
      return this.bikesStationService.cacheFeature$.pipe(
        take(1),
        map((data: Feature) => data.features.find((station: BikeStation) => station.id === stationId)),
        catchError(error => {
          console.log('error', error);
          return of(null);
        })
      );
    } else {
      return this.bikesStationService.getBikesStations().pipe(
        map((data: Feature) => data.features.find((station: BikeStation) => station.id === stationId)),
        catchError(error => {
          console.log('error', error);
          return of(null);
        })
      );
    }

  }


}
