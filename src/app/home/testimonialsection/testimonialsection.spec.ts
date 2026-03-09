import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonialsection } from './testimonialsection';

describe('Testimonialsection', () => {
  let component: Testimonialsection;
  let fixture: ComponentFixture<Testimonialsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimonialsection],
    }).compileComponents();

    fixture = TestBed.createComponent(Testimonialsection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
