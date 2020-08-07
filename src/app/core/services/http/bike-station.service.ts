import { Injectable } from '@angular/core';
import { CoreModule } from '../../core.module';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { commonHttpHeaders } from './common-http-headers';
import { Feature } from '../../models/feature';
import { tap } from 'rxjs/operators';

const BASE_URL = 'http://www.poznan.pl/mim/plan/map_service.html';

@Injectable({
  providedIn: CoreModule
})
export class BikeStationService {

  private cacheFeatureSubject = new BehaviorSubject<Feature>(null);
  cacheFeature$ = this.cacheFeatureSubject.asObservable();

  constructor(private http: HttpClient) { }

  getBikesStations(): Observable<Feature> {
    return this.http.get<Feature>(`${BASE_URL}?mtype=pub_transport&co=stacje_rowerowe`, commonHttpHeaders).pipe(
      tap((features: Feature) => this.cacheFeatureSubject.next(features))
    );
  }

  checkCacheFeatureIsExists(): boolean {
    return !!this.cacheFeatureSubject.getValue();
  }



}
