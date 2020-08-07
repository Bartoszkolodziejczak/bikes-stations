import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bikes-stations-list',
  templateUrl: './bikes-stations-list.component.html',
  styleUrls: ['./bikes-stations-list.component.scss']
})
export class BikesStationsListComponent  {

  @Input() bikesStations: any;

}
