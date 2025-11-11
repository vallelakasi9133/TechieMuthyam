import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendRoadmap } from './frontend-roadmap';

describe('FrontendRoadmap', () => {
  let component: FrontendRoadmap;
  let fixture: ComponentFixture<FrontendRoadmap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendRoadmap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendRoadmap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
