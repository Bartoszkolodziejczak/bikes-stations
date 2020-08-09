import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStationDetailsComponent } from './bike-station-details.component';
import { StationCardComponent } from '../station-card/station-card.component';
import { MapsAPILoader } from '@agm/core';
import { DebugElement } from '@angular/core';

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


});
