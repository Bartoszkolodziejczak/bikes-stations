import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationCardComponent } from './station-card.component';
import { MapsAPILoader } from '@agm/core';

describe('StationCardComponent', () => {
  let component: StationCardComponent;
  let fixture: ComponentFixture<StationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationCardComponent ],
      providers: [
        MapsAPILoader
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
