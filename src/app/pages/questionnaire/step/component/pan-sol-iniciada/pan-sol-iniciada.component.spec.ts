import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanSolIniciadaComponent } from './pan-sol-iniciada.component';

describe('PanSolIniciadaComponent', () => {
  let component: PanSolIniciadaComponent;
  let fixture: ComponentFixture<PanSolIniciadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanSolIniciadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanSolIniciadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
