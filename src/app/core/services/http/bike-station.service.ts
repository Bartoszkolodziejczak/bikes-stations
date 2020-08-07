import { Injectable } from '@angular/core';
import { CoreModule } from '../../core.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { commonHttpHeaders } from './common-http-headers';
import { Feature } from '../../models/feature';

const BASE_URL = 'http://www.poznan.pl/mim/plan/map_service.html';

@Injectable({
  providedIn: CoreModule
})
export class BikeStationService {

  constructor(private http: HttpClient) { }

  getBikesStations(): Observable<Feature> {
    return this.http.get<Feature>(`${BASE_URL}?mtype=pub_transport&co=stacje_rowerowe`, commonHttpHeaders);
  }

}
