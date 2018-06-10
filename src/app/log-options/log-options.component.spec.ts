import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOptionsComponent } from './log-options.component';

describe('LogOptionsComponent', () => {
  let component: LogOptionsComponent;
  let fixture: ComponentFixture<LogOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
