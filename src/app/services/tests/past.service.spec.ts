import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PastService } from './../past.service';

describe('PastService', () => {
  let service: PastService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient, HttpHandler]});
    service = TestBed.inject(PastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
