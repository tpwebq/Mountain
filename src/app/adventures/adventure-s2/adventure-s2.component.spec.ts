import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureS2Component } from './adventure-s2.component';

describe('AdventureS2Component', () => {
  let component: AdventureS2Component;
  let fixture: ComponentFixture<AdventureS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
