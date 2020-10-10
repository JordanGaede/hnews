import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ShowService } from './../show.service';

describe('ShowService', () => {
  let service: ShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient, HttpHandler]});
    service = TestBed.inject(ShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
