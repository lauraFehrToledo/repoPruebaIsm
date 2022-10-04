import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanSolResumenComponent } from './pan-sol-resumen.component';

describe('PanSolResumenComponent', () => {
  let component: PanSolResumenComponent;
  let fixture: ComponentFixture<PanSolResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanSolResumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanSolResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
