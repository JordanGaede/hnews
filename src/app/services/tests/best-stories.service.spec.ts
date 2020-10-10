import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BestStoriesService } from './../best-stories.service';

describe('BestStoriesService', () => {
  let service: BestStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient, HttpHandler]});
    service = TestBed.inject(BestStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
