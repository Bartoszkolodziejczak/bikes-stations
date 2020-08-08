import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BikeStation } from '../../../../core/models/bike-station';
import { Coordinate } from '../../models/coordinate';
import { MapsAPILoader } from '@agm/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-station-card',
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StationCardComponent  {

  @Input() station: BikeStation;

  // tslint:disable-next-line:variable-name
  private _userCoordinate: Coordinate;

  @Input() set userCoordinate(userCoordinate: Coordinate) {
    if (userCoordinate) {
      this._userCoordinate = userCoordinate;
      this.mapsAPILoader.load().then(() => {
        this.calculateDistance();
      });
    }
  }

  get userCoordinate(): Coordinate {
    return this._userCoordinate;
  }


  private distanceSubject = new BehaviorSubject<number>(0);
  distance$ = this.distanceSubject.asObservable();

  constructor(private mapsAPILoader: MapsAPILoader) {
  }


  calculateDistance(): void {
    const userLocation = new google.maps.LatLng(this.userCoordinate.latitude, this.userCoordinate.longitude);
    const station = new google.maps.LatLng(this.station.geometry.coordinates[1], this.station.geometry.coordinates[0]);
    const distance = google.maps.geometry.spherical.computeDistanceBetween(userLocation, station);
    this.distanceSubject.next( parseFloat((distance / 1000).toFixed(1)));
  }


}
