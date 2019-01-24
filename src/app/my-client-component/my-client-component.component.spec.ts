import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClientComponentComponent } from './my-client-component.component';

describe('MyClientComponentComponent', () => {
  let component: MyClientComponentComponent;
  let fixture: ComponentFixture<MyClientComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClientComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
