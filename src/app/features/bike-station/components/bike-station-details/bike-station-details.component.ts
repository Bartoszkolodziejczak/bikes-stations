import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { BikeStation } from '../../../../core/models/bike-station';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-bike-station-details',
  templateUrl: './bike-station-details.component.html',
  styleUrls: ['./bike-station-details.component.scss']
})
export class BikeStationDetailsComponent implements OnInit {


  bikeIcon = 'assets/images/bike-marker.svg';
  localizationIcon = 'assets/images/localization.svg';


  @Input() bikeStation: BikeStation;
  @Input() userLatitude: number;
  @Input() userLongitude: number;

  constructor(private mapsAPILoader: MapsAPILoader) {
  }

  ngOnInit(): void {

    this.mapsAPILoader.load().then(() => {
      this.calculateDistance();
    });

  }



  calculateDistance(): void {
    const userLocation = new google.maps.LatLng(this.userLatitude, this.userLongitude);
    const station = new google.maps.LatLng(this.bikeStation.geometry.coordinates[1], this.bikeStation.geometry.coordinates[0]);
    const distance = google.maps.geometry.spherical.computeDistanceBetween(userLocation, station);
    console.log('distance in km', (distance / 1000).toFixed(1));

  }


}
