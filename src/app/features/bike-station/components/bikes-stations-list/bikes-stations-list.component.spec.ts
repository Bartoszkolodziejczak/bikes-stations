import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesStationsListComponent } from './bikes-stations-list.component';
import { StationCardComponent } from '../station-card/station-card.component';
import { DebugElement } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

describe('BikesStationsListComponent', () => {
  let component: BikesStationsListComponent;
  let fixture: ComponentFixture<BikesStationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BikesStationsListComponent,
        StationCardComponent,
      ],
      providers: [
        MapsAPILoader
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesStationsListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if error exists should show error message in html', () => {
    component.error = 'Error';
    fixture.detectChanges();

    const errorMessageDe: DebugElement = fixture.debugElement;
    const errorMessageEL: HTMLElement = errorMessageDe.nativeElement;
    const errorMessage = errorMessageEL.querySelector('.alert-danger');
    const errorTextExists: boolean = errorMessage.textContent.includes(component.error);
    expect(errorTextExists).toBeTruthy();
  });

  it('clicked station should navgiate to map ', () => {
    component.bikeStations = [
      {
        id: '1',
        geometry: {
          coordinates: [10, 20],
          type: ''
        },
        type: '',
        properties: {
          free_racks: 10,
          bikes: 5,
          label: 'Test label',
          bike_racks: 7,
          updated: new Date(),
        },
      }
    ];
    spyOn(component.navigateToMap, 'emit');
    fixture.detectChanges();
    const stationCardDe: DebugElement = fixture.debugElement;
    const stationCardEl: HTMLElement = stationCardDe.nativeElement.querySelector('.card');
    stationCardEl.click();
    fixture.detectChanges();
    expect(component.navigateToMap.emit).toHaveBeenCalled();
  });

});
