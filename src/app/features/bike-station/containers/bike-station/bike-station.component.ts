import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { BikeStation } from '../../../../core/models/bike-station';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bike-station',
  templateUrl: './bike-station.component.html',
  styleUrls: ['./bike-station.component.scss']
})
export class BikeStationComponent implements OnInit {

  bikeStation$: Observable<BikeStation>;

  userLatitude: number;
  userLongitude: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.findMe();
    this.bikeStation$ = this.activatedRoute.data.pipe(
      map((data: Data) => data.bikeStation)
    );
  }

  // TODO refactoring i nie tutaj
  findMe(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        this.userLatitude = position.coords.latitude;
        this.userLongitude = position.coords.longitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }


}
