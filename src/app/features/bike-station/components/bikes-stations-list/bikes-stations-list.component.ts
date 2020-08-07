import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BikeStation } from '../../../../core/models/bike-station';

@Component({
  selector: 'app-bikes-stations-list',
  templateUrl: './bikes-stations-list.component.html',
  styleUrls: ['./bikes-stations-list.component.scss']
})
export class BikesStationsListComponent {

  @Input() bikeStations: BikeStation[];

  @Output() navigateToMap = new EventEmitter<number>();

  onNavigateToMap(stationId: number): void {
    this.navigateToMap.emit(stationId);
  }

}
