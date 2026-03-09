import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectsection } from './projectsection';

describe('Projectsection', () => {
  let component: Projectsection;
  let fixture: ComponentFixture<Projectsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projectsection],
    }).compileComponents();

    fixture = TestBed.createComponent(Projectsection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
