import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnebhkComponent } from './onebhk.component';

describe('OnebhkComponent', () => {
  let component: OnebhkComponent;
  let fixture: ComponentFixture<OnebhkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnebhkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnebhkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
