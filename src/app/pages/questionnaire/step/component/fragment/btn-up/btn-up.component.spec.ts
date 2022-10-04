import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnUpComponent } from './btn-up.component';

describe('BtnUpComponent', () => {
  let component: BtnUpComponent;
  let fixture: ComponentFixture<BtnUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
