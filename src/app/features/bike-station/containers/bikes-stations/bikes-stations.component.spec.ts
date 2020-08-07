import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesStationsComponent } from './bikes-stations.component';

describe('BikesStationsComponent', () => {
  let component: BikesStationsComponent;
  let fixture: ComponentFixture<BikesStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesStationsComponent ]
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
