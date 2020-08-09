import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BikeStation } from '../../../../core/models/bike-station';
import { Coordinate } from '../../models/coordinate';
import { ErrorService } from '../../../../core/services/error.service';
import { GeolocationService } from '../../../../core/services/geolocation.service';

@Component({
  selector: 'app-bikes-stations',
  templateUrl: './bikes-stations.component.html',
  styleUrls: ['./bikes-stations.component.scss']
})
export class BikesStationsComponent implements OnInit {

  bikesStations$: Observable<BikeStation[]>;
  error$: Observable<string>;
  userCoordinate$: Observable<Coordinate>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private errorService: ErrorService,
              private geolocationService: GeolocationService) {
  }

  ngOnInit(): void {
    this.userCoordinate$ = this.geolocationService.userCoordinate$;
    this.bikesStations$ = this.activatedRoute.data.pipe(
      map((data: Data) => data.bikesStations)
    );
    this.error$ = this.errorService.error$;
  }

  onNavigateToMap(stationId: string): void {
    this.router.navigate([stationId], {relativeTo: this.activatedRoute});
  }


}
