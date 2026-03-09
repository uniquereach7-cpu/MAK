import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modularsection } from './modularsection';

describe('Modularsection', () => {
  let component: Modularsection;
  let fixture: ComponentFixture<Modularsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modularsection],
    }).compileComponents();

    fixture = TestBed.createComponent(Modularsection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
