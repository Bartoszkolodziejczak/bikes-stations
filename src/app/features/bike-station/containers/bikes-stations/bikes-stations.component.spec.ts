import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { BikesStationsComponent } from './bikes-stations.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorService } from '../../../../core/services/error.service';
import { GeolocationService } from '../../../../core/services/geolocation.service';
import { BikesStationsListComponent } from '../../components/bikes-stations-list/bikes-stations-list.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


class SubErrorService {
}

class SubGeolocationService {
}


describe('BikesStationsComponent', () => {
  let component: BikesStationsComponent;
  let fixture: ComponentFixture<BikesStationsComponent>;
  let router: Router;
  let location: Location;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BikesStationsComponent,
        BikesStationsListComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            { path: 'bikes-stations', component: BikesStationsComponent },
          ]
        )
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
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onNavigateToMap should change url to bikes-stations/1', (() => {
    const spy = spyOn(router, 'navigate');
    const path = router.config[0].path;

    component.onNavigateToMap('1');

    const id = spy.calls.first().args[0][0];
    const url = path + '/' + id;

    expect(url).toBe('bikes-stations/1');
  }));

});
