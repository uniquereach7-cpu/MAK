import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whysection } from './whysection';

describe('Whysection', () => {
  let component: Whysection;
  let fixture: ComponentFixture<Whysection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whysection],
    }).compileComponents();

    fixture = TestBed.createComponent(Whysection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
