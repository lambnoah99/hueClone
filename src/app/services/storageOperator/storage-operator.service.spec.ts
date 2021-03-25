import { TestBed } from '@angular/core/testing';

import { StorageOperatorService } from './storage-operator.service';

describe('StorageOperatorService', () => {
  let service: StorageOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
