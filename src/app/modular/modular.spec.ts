import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modular } from './modular';

describe('Modular', () => {
  let component: Modular;
  let fixture: ComponentFixture<Modular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modular],
    }).compileComponents();

    fixture = TestBed.createComponent(Modular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
