import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datascienceqa } from './datascienceqa';

describe('Datascienceqa', () => {
  let component: Datascienceqa;
  let fixture: ComponentFixture<Datascienceqa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datascienceqa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datascienceqa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
