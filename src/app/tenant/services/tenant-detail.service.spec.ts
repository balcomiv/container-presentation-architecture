import { TestBed } from '@angular/core/testing';

import { TenantDetailService } from './tenant-detail.service';

describe('TenantDetailService', () => {
  let service: TenantDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
