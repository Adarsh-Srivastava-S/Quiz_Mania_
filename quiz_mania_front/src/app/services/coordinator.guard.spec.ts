import { TestBed } from '@angular/core/testing';

import { CoordinatorGuard } from './coordinator.guard';

describe('CoordinatorGuard', () => {
  let guard: CoordinatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CoordinatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
