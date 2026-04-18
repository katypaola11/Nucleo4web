import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPages } from './carrito-pages';

describe('CarritoPages', () => {
  let component: CarritoPages;
  let fixture: ComponentFixture<CarritoPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoPages],
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
