import { TestBed } from '@angular/core/testing';

import { CompnaySharedService } from './compnay-shared.service';

describe('CompnaySharedService', () => {
  let service: CompnaySharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompnaySharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
