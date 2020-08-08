import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { BikeStation } from '../../../../core/models/bike-station';
import { map } from 'rxjs/operators';
import { Coordinate } from '../../models/coordinate';
import { ErrorService } from '../../../../core/services/error.service';

@Component({
  selector: 'app-bike-station',
  templateUrl: './bike-station.component.html',
  styleUrls: ['./bike-station.component.scss']
})
export class BikeStationComponent implements OnInit {

  bikeStation$: Observable<BikeStation>;
  error$: Observable<string>;
  userCoordinate: Coordinate;
  bikeIcon = 'assets/images/bike-marker.svg';
  localizationIcon = 'assets/images/localization.svg';


  constructor(private activatedRoute: ActivatedRoute,
              private errorService: ErrorService) {
  }

  ngOnInit(): void {
    this.findMe();
    this.bikeStation$ = this.activatedRoute.data.pipe(
      map((data: Data) => data.bikeStation)
    );
    this.error$ = this.errorService.error$;
  }


  findMe(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userCoordinate = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }


}
