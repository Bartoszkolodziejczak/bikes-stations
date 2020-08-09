import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { BehaviorSubject } from 'rxjs';
import { Coordinate } from '../../features/bike-station/models/coordinate';

@Injectable({
  providedIn: CoreModule
})
export class GeolocationService {

  private userCoordinateSubject = new BehaviorSubject<Coordinate>(null);
  userCoordinate$ = this.userCoordinateSubject.asObservable();

  findUser(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userCoordinate = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.userCoordinateSubject.next(userCoordinate);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

}
