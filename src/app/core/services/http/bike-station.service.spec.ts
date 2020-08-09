import { TestBed } from '@angular/core/testing';

import { BikeStationService } from './bike-station.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BikeStationService', () => {
  let service: BikeStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BikeStationService
      ]
    });
    service = TestBed.inject(BikeStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
