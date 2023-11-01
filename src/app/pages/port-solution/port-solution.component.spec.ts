import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortSolutionComponent } from './port-solution.component';

describe('PortSolutionComponent', () => {
  let component: PortSolutionComponent;
  let fixture: ComponentFixture<PortSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortSolutionComponent]
    });
    fixture = TestBed.createComponent(PortSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
