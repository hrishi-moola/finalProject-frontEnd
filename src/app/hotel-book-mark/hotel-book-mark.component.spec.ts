import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookMarkComponent } from './hotel-book-mark.component';

describe('HotelBookMarkComponent', () => {
  let component: HotelBookMarkComponent;
  let fixture: ComponentFixture<HotelBookMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelBookMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelBookMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
