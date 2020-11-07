import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanageCreateComponent } from './orphanage-create.component';

describe('OrphanageCreateComponent', () => {
  let component: OrphanageCreateComponent;
  let fixture: ComponentFixture<OrphanageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanageCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphanageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
