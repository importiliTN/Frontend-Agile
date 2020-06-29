import { TestBed, async, inject } from '@angular/core/testing';

import { UserGuardService } from './user-guard.service';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGuardService]
    });
  });

  it('should ...', inject([UserGuardService], (guard: UserGuardService) => {
    expect(guard).toBeTruthy();
  }));
});
