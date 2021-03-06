import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildChildComponent } from './view-child-child.component';

describe('ViewChildChildComponent', () => {
  let component: ViewChildChildComponent;
  let fixture: ComponentFixture<ViewChildChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
