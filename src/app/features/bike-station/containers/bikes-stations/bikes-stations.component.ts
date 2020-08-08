import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BikeStation } from '../../../../core/models/bike-station';
import { Coordinate } from '../../models/coordinate';

@Component({
  selector: 'app-bikes-stations',
  templateUrl: './bikes-stations.component.html',
  styleUrls: ['./bikes-stations.component.scss']
})
export class BikesStationsComponent implements OnInit {

  bikesStations$: Observable<BikeStation[]>;
  userCoordinate: Coordinate;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.findMe();
    this.bikesStations$ = this.activatedRoute.data.pipe(
      map((data: Data) => data.bikesStations)
    );
  }

  onNavigateToMap(stationId: string): void {
    this.router.navigate([stationId], {relativeTo: this.activatedRoute});
  }


  // TODO refactoring i nie tutaj
  findMe(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userCoordinate = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }


}
