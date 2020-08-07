import { Component, OnInit } from '@angular/core';
import { BikeStationService } from '../../../../core/services/http/bike-station.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';
import { map } from 'rxjs/operators';
import { BikeStation } from '../../../../core/models/bike-station';
import { StationDetails } from '../../../../core/models/station-details';

@Component({
  selector: 'app-bikes-stations',
  templateUrl: './bikes-stations.component.html',
  styleUrls: ['./bikes-stations.component.scss']
})
export class BikesStationsComponent implements OnInit {

  bikesStations$: Observable<BikeStation[]>;

  constructor(private bikeStationService: BikeStationService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.bikesStations$ = this.activatedRoute.data.pipe(
      map((data: Data) => data.bikesStations)
    );
  }

  onNavigateToMap(stationId: number): void {
    console.log('navigation to', stationId);
  }

}
