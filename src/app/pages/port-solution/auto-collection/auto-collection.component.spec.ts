import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCollectionComponent } from './auto-collection.component';

describe('AutoCollectionComponent', () => {
  let component: AutoCollectionComponent;
  let fixture: ComponentFixture<AutoCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCollectionComponent]
    });
    fixture = TestBed.createComponent(AutoCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
