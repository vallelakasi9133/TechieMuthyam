import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndInterviewQA } from './front-end-interview-qa';

describe('FrontEndInterviewQA', () => {
  let component: FrontEndInterviewQA;
  let fixture: ComponentFixture<FrontEndInterviewQA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontEndInterviewQA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontEndInterviewQA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
