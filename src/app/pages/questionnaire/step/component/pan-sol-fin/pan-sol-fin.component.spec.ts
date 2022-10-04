import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanSolFinComponent } from './pan-sol-fin.component';

describe('PanSolFinComponent', () => {
  let component: PanSolFinComponent;
  let fixture: ComponentFixture<PanSolFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanSolFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanSolFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
