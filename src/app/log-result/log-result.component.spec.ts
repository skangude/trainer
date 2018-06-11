import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogResultComponent } from './log-result.component';

describe('LogResultComponent', () => {
  let component: LogResultComponent;
  let fixture: ComponentFixture<LogResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
