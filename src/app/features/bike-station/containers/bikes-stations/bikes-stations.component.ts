import { Component, OnInit } from '@angular/core';
import { BikeStationService } from '../../../../core/services/http/bike-station.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bikes-stations',
  templateUrl: './bikes-stations.component.html',
  styleUrls: ['./bikes-stations.component.scss']
})
export class BikesStationsComponent implements OnInit {

  bikesStations$: Observable<any>;

  constructor(private bikeStationService: BikeStationService) { }

  ngOnInit(): void {
    this.bikesStations$ = this.bikeStationService.getBikesStations();
  }

}
