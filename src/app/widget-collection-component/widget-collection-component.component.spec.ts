import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCollectionComponentComponent } from './widget-collection-component.component';

describe('WidgetCollectionComponentComponent', () => {
  let component: WidgetCollectionComponentComponent;
  let fixture: ComponentFixture<WidgetCollectionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetCollectionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCollectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
