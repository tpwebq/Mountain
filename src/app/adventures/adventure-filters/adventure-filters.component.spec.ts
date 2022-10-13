import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureFiltersComponent } from './adventure-filters.component';

describe('AdventureFiltersComponent', () => {
  let component: AdventureFiltersComponent;
  let fixture: ComponentFixture<AdventureFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
