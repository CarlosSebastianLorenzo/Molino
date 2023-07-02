import { TestBed } from '@angular/core/testing';

import { LibroDeMovimientosService } from './libro-de-movimientos.service';

describe('LibroDeMovimientosService', () => {
  let service: LibroDeMovimientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroDeMovimientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
