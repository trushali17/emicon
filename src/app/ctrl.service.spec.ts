import { TestBed } from '@angular/core/testing';

import { CtrlService } from './ctrl.service';

describe('CtrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CtrlService = TestBed.get(CtrlService);
    expect(service).toBeTruthy();
  });
});
