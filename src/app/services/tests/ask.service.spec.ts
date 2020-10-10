import { AskService } from './../ask.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AskService', () => {
  let service: AskService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient, HttpHandler]});
    service = TestBed.inject(AskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
