import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsComponentComponent } from './widgets-component.component';

describe('WidgetsComponentComponent', () => {
  let component: WidgetsComponentComponent;
  let fixture: ComponentFixture<WidgetsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
