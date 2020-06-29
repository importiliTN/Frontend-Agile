import { TestBed } from '@angular/core/testing';

import { TokensStorageService } from './tokens-storage.service';

describe('TokensStorageService', () => {
  let service: TokensStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokensStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
