import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BikeStation } from '../../../core/models/bike-station';
import { BikeStationService } from '../../../core/services/http/bike-station.service';
import { Observable, of } from 'rxjs';
import { Feature } from '../../../core/models/feature';
import { catchError, map, take } from 'rxjs/operators';
import { ErrorService } from '../../../core/services/error.service';
import { GeolocationService } from '../../../core/services/geolocation.service';

@Injectable()
export class LoadBikesStationsResolver implements Resolve<BikeStation[]> {

  constructor(private bikesStationService: BikeStationService,
              private errorService: ErrorService,
              private geolocationService: GeolocationService) {
  }


  resolve(): Observable<BikeStation[]> {

    this.geolocationService.findUser();

    const checkCacheFeatureIsExists: boolean = this.bikesStationService.checkCacheFeatureIsExists();
    if (checkCacheFeatureIsExists) {
      return this.bikesStationService.cacheFeature$.pipe(
        take(1),
        map((data: Feature) => {
          this.errorService.clearError();
          return data.features;
        }),
        catchError(error => {
          this.errorService.addError('Ups! Nie udało się załadować danych');
          return of([]);
        })
      );
    } else {
      return this.bikesStationService.getBikesStations().pipe(
        map((data: Feature) => {
          this.errorService.clearError();
          return data.features;
        }),
        catchError(error => {
          this.errorService.addError('Ups! Nie udało się załadować danych');
          return of([]);
        })
      );
    }

  }


}
