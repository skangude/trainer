import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenColmBtnComponent } from './ten-colm-btn.component';

describe('TenColmBtnComponent', () => {
  let component: TenColmBtnComponent;
  let fixture: ComponentFixture<TenColmBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenColmBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenColmBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
