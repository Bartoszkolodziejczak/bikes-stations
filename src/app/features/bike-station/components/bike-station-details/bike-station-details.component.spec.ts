import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStationDetailsComponent } from './bike-station-details.component';
import { StationCardComponent } from '../station-card/station-card.component';
import { MapsAPILoader } from '@agm/core';

describe('BikeStationDetailsComponent', () => {
  let component: BikeStationDetailsComponent;
  let fixture: ComponentFixture<BikeStationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BikeStationDetailsComponent,
        StationCardComponent
      ],
      providers: [
        MapsAPILoader
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
