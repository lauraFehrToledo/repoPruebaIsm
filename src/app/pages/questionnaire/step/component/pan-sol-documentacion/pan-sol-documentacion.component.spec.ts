import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanSolDocumentacionComponent } from './pan-sol-documentacion.component';

describe('PanSolDocumentacionComponent', () => {
  let component: PanSolDocumentacionComponent;
  let fixture: ComponentFixture<PanSolDocumentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanSolDocumentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanSolDocumentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
