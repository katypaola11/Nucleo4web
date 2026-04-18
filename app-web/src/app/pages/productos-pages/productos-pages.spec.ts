import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPages } from './productos-pages';

describe('ProductosPages', () => {
  let component: ProductosPages;
  let fixture: ComponentFixture<ProductosPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosPages],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
