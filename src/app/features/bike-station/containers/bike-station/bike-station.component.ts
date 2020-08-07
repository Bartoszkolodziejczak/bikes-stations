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


  constructor(private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.bikeStation$ = this.activatedRoute.data.pipe(
      map((data: Data) => data.bikeStation)
    );
  }

}
