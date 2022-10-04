import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanSolicitanteRepresentanteComponent } from './pan-solicitante-representante.component';

describe('PanSolicitanteRepresentanteComponent', () => {
  let component: PanSolicitanteRepresentanteComponent;
  let fixture: ComponentFixture<PanSolicitanteRepresentanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanSolicitanteRepresentanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanSolicitanteRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
