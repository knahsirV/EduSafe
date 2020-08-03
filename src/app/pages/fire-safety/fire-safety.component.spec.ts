import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireSafetyComponent } from './fire-safety.component';

describe('FireSafetyComponent', () => {
  let component: FireSafetyComponent;
  let fixture: ComponentFixture<FireSafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireSafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
