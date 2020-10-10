import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { CommentsService } from '../comments.service';

describe('CommentsService', () => {
  let service: CommentsService;
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient, HttpHandler, {provide: ActivatedRoute, useValue: fakeActivatedRoute}]});
    service = TestBed.inject(CommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
