import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { BikeStation } from '../../../core/models/bike-station';
import { BikeStationService } from '../../../core/services/http/bike-station.service';
import { Observable, of } from 'rxjs';
import { Feature } from '../../../core/models/feature';
import { catchError, map, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../../core/services/error.service';

@Injectable()
export class LoadBikeStationResolver implements Resolve<BikeStation> {

  constructor(private bikesStationService: BikeStationService,
              private errorService: ErrorService) {
  }


  resolve(route: ActivatedRouteSnapshot): Observable<BikeStation> {

    const stationId: string = route.params.id;
    const checkCacheFeatureIsExists: boolean = this.bikesStationService.checkCacheFeatureIsExists();

    if (checkCacheFeatureIsExists) {
      return this.bikesStationService.cacheFeature$.pipe(
        take(1),
        map((data: Feature) => {
          this.errorService.clearError();
          return this.findBikeStation(data, stationId);
        }),
        catchError((error: HttpErrorResponse) => {
          this.errorService.getError('Ups! Nie udało się załadować danych');
          return of(null);
        })
      );
    } else {
      return this.bikesStationService.getBikesStations().pipe(
        map((data: Feature) => {
          this.errorService.clearError();
          return this.findBikeStation(data, stationId);
        }),
        catchError(error => {
          this.errorService.getError('Ups! Nie udało się załadować danych');
          return of(null);
        })
      );
    }

  }

  private findBikeStation(data: Feature, stationId: string): BikeStation {
    return data.features.find((station: BikeStation) => station.id === stationId);
  }


}
