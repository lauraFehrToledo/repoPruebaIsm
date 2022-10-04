import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanCentroComponent } from './pan-centro.component';

describe('PanCentroComponent', () => {
  let component: PanCentroComponent;
  let fixture: ComponentFixture<PanCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
