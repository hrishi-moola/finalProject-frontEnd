import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsNearbyComponent } from './attractions-nearby.component';

describe('AttractionsNearbyComponent', () => {
  let component: AttractionsNearbyComponent;
  let fixture: ComponentFixture<AttractionsNearbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionsNearbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
