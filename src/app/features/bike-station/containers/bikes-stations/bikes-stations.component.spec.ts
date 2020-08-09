import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesStationsComponent } from './bikes-stations.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorService } from '../../../../core/services/error.service';
import { GeolocationService } from '../../../../core/services/geolocation.service';
import { BikesStationsListComponent } from '../../components/bikes-stations-list/bikes-stations-list.component';


class SubErrorService {
}

class SubGeolocationService {
}

describe('BikesStationsComponent', () => {
  let component: BikesStationsComponent;
  let fixture: ComponentFixture<BikesStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BikesStationsComponent,
        BikesStationsListComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: ErrorService, useValue: SubErrorService},
        {provide: GeolocationService, useValue: SubGeolocationService},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
