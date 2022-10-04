import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanSolDotacionReposicionComponent } from './pan-sol-dotacion-reposicion.component';

describe('PanSolDotacionReposicionComponent', () => {
  let component: PanSolDotacionReposicionComponent;
  let fixture: ComponentFixture<PanSolDotacionReposicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanSolDotacionReposicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanSolDotacionReposicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
