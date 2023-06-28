import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDeMovimientosComponent } from './libro-de-movimientos.component';

describe('LibroDeMovimientosComponent', () => {
  let component: LibroDeMovimientosComponent;
  let fixture: ComponentFixture<LibroDeMovimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroDeMovimientosComponent]
    });
    fixture = TestBed.createComponent(LibroDeMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
