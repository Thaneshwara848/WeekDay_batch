import { TestBed } from '@angular/core/testing';

import { GetmyprodservService } from './getmyprodserv.service';

describe('GetmyprodservService', () => {
  let service: GetmyprodservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetmyprodservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
