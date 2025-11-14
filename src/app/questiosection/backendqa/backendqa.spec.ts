import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Backendqa } from './backendqa';

describe('Backendqa', () => {
  let component: Backendqa;
  let fixture: ComponentFixture<Backendqa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Backendqa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Backendqa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
