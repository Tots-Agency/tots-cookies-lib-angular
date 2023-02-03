import { TestBed } from '@angular/core/testing';

import { TotsCookiesService } from './tots-cookies.service';

describe('TotsCookiesService', () => {
  let service: TotsCookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotsCookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
