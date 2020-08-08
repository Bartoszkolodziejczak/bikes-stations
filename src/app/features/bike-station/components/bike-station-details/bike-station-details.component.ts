import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BikeStation } from '../../../../core/models/bike-station';
import { Coordinate } from '../../models/coordinate';


@Component({
  selector: 'app-bike-station-details',
  templateUrl: './bike-station-details.component.html',
  styleUrls: ['./bike-station-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeStationDetailsComponent  {

  @Input() bikeStation: BikeStation;
  @Input() userCoordinate: Coordinate;

  bikeIcon = 'assets/images/bike-marker.svg';
  localizationIcon = 'assets/images/localization.svg';

}
