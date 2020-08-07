import { Component, Input } from '@angular/core';
import { BikeStation } from '../../../../core/models/bike-station';
import { MapsAPILoader } from '@agm/core';
import { Coordinate } from '../../models/coordinate';


@Component({
  selector: 'app-bike-station-details',
  templateUrl: './bike-station-details.component.html',
  styleUrls: ['./bike-station-details.component.scss'],
})
export class BikeStationDetailsComponent  {


  bikeIcon = 'assets/images/bike-marker.svg';
  localizationIcon = 'assets/images/localization.svg';

  @Input() bikeStation: BikeStation;

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

  distance = 0;

  constructor(private mapsAPILoader: MapsAPILoader) {
  }




  calculateDistance(): void {
    const userLocation = new google.maps.LatLng(this.userCoordinate.latitude, this.userCoordinate.longitude);
    const station = new google.maps.LatLng(this.bikeStation.geometry.coordinates[1], this.bikeStation.geometry.coordinates[0]);
    const distance = google.maps.geometry.spherical.computeDistanceBetween(userLocation, station);
    this.distance = parseFloat((distance / 1000).toFixed(1));
  }


}
