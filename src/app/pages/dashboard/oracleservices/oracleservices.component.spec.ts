import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleservicesComponent } from './oracleservices.component';

describe('OracleservicesComponent', () => {
  let component: OracleservicesComponent;
  let fixture: ComponentFixture<OracleservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OracleservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OracleservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
