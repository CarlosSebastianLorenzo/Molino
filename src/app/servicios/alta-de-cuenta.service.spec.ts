import { TestBed } from '@angular/core/testing';

import { AltaDeCuentaService } from './alta-de-cuenta.service';

describe('AltaDeCuentaService', () => {
  let service: AltaDeCuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltaDeCuentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
