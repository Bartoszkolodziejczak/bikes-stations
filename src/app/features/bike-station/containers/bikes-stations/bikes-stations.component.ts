import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BikeStation } from '../../../../core/models/bike-station';

@Component({
  selector: 'app-bikes-stations',
  templateUrl: './bikes-stations.component.html',
  styleUrls: ['./bikes-stations.component.scss']
})
export class BikesStationsComponent implements OnInit {

  bikesStations$: Observable<BikeStation[]>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.bikesStations$ = this.activatedRoute.data.pipe(
      map((data: Data) => data.bikesStations)
    );
  }

  onNavigateToMap(stationId: number): void {
    this.router.navigate([stationId], {relativeTo: this.activatedRoute});
  }

}
