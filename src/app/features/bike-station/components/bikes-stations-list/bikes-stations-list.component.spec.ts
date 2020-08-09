import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesStationsListComponent } from './bikes-stations-list.component';
import { StationCardComponent } from '../station-card/station-card.component';

describe('BikesStationsListComponent', () => {
  let component: BikesStationsListComponent;
  let fixture: ComponentFixture<BikesStationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BikesStationsListComponent,
        StationCardComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesStationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
