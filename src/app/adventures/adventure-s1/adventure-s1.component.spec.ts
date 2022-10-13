import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureS1Component } from './adventure-s1.component';

describe('AdventureS1Component', () => {
  let component: AdventureS1Component;
  let fixture: ComponentFixture<AdventureS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
