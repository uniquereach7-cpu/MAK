import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Processsection } from './processsection';

describe('Processsection', () => {
  let component: Processsection;
  let fixture: ComponentFixture<Processsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Processsection],
    }).compileComponents();

    fixture = TestBed.createComponent(Processsection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
