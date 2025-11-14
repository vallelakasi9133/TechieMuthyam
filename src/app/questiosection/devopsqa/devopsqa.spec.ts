import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Devopsqa } from './devopsqa';

describe('Devopsqa', () => {
  let component: Devopsqa;
  let fixture: ComponentFixture<Devopsqa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Devopsqa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Devopsqa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
