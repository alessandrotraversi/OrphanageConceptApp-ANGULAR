import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanageMapComponent } from './orphanage-map.component';

describe('OrphanageMapComponent', () => {
  let component: OrphanageMapComponent;
  let fixture: ComponentFixture<OrphanageMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanageMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphanageMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
