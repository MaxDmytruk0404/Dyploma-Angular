import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOZComponent } from './map-oz.component';

describe('MapOZComponent', () => {
  let component: MapOZComponent;
  let fixture: ComponentFixture<MapOZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapOZComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapOZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
