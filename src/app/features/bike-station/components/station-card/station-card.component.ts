import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BikeStation } from '../../../../core/models/bike-station';

@Component({
  selector: 'app-station-card',
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StationCardComponent  {

  @Input() station: BikeStation;
  @Input() distance: number;

}
