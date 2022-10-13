import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFiltersComponent } from './services-filters.component';

describe('ServicesFiltersComponent', () => {
  let component: ServicesFiltersComponent;
  let fixture: ComponentFixture<ServicesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
