import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStationComponent } from './bike-station.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorService } from '../../../../core/services/error.service';
import { GeolocationService } from '../../../../core/services/geolocation.service';
import { BikeStationDetailsComponent } from '../../components/bike-station-details/bike-station-details.component';
import { StationCardComponent } from '../../components/station-card/station-card.component';
import { MapsAPILoader } from '@agm/core';

class SubErrorService {
}

class SubGeolocationService {
}

describe('BikeStationComponent', () => {
  let component: BikeStationComponent;
  let fixture: ComponentFixture<BikeStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BikeStationComponent,
        BikeStationDetailsComponent,
        StationCardComponent
      ],
      providers: [
        {provide: ErrorService, useValue: SubErrorService},
        {provide: GeolocationService, useValue: SubGeolocationService},
        MapsAPILoader
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
