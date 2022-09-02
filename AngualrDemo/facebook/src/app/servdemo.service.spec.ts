import { TestBed } from '@angular/core/testing';

import { ServdemoService } from './servdemo.service';

describe('ServdemoService', () => {
  let service: ServdemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServdemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
