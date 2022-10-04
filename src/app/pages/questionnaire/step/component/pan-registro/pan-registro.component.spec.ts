import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanRegistroComponent } from './pan-registro.component';

describe('PanRegistroComponent', () => {
  let component: PanRegistroComponent;
  let fixture: ComponentFixture<PanRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
