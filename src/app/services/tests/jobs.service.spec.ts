import { HttpClient, HttpHandler } from '@angular/common/http';
import { JobService } from './../jobs.service';
import { TestBed } from '@angular/core/testing';

describe('JobsService', () => {
  let service: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(JobService);
  });

  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
