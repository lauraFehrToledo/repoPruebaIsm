import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanTipoSolicitudBarcoComponent } from './pan-tipo-solicitud-barco.component';

describe('PanTipoSolicitudBarcoComponent', () => {
  let component: PanTipoSolicitudBarcoComponent;
  let fixture: ComponentFixture<PanTipoSolicitudBarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanTipoSolicitudBarcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanTipoSolicitudBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
