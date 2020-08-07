import { Geometry } from './geometry';
import { StationDetails } from './station-details';

export interface BikeStation {
  id: string;
  geometry: Geometry;
  type: string;
  properties: StationDetails;
}
