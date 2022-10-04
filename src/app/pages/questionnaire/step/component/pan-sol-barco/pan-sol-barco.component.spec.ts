import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanSolBarcoComponent } from './pan-sol-barco.component';

describe('PanSolBarcoComponent', () => {
  let component: PanSolBarcoComponent;
  let fixture: ComponentFixture<PanSolBarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanSolBarcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanSolBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
