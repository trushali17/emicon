import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationssComponent } from './animationss.component';

describe('AnimationssComponent', () => {
  let component: AnimationssComponent;
  let fixture: ComponentFixture<AnimationssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
