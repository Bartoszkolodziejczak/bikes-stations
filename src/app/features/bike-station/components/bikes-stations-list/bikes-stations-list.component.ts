import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BikeStation } from '../../../../core/models/bike-station';

@Component({
  selector: 'app-bikes-stations-list',
  templateUrl: './bikes-stations-list.component.html',
  styleUrls: ['./bikes-stations-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikesStationsListComponent {

  @Input() bikeStations: BikeStation[];

  @Output() navigateToMap = new EventEmitter<string>();

  onNavigateToMap(stationId: string): void {
    this.navigateToMap.emit(stationId);
  }

}
