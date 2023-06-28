import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaDeCuentaComponent } from './alta-de-cuenta.component';

describe('AltaDeCuentaComponent', () => {
  let component: AltaDeCuentaComponent;
  let fixture: ComponentFixture<AltaDeCuentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaDeCuentaComponent]
    });
    fixture = TestBed.createComponent(AltaDeCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
