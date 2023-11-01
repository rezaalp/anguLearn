import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticCardComponent } from './logistic-card.component';

describe('LogisticCardComponent', () => {
  let component: LogisticCardComponent;
  let fixture: ComponentFixture<LogisticCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticCardComponent]
    });
    fixture = TestBed.createComponent(LogisticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
