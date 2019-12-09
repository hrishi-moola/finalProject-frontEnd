import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDisplayComponentComponent } from './hotel-display-component.component';

describe('HotelDisplayComponentComponent', () => {
  let component: HotelDisplayComponentComponent;
  let fixture: ComponentFixture<HotelDisplayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDisplayComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
