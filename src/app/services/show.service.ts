import { Story } from './../models/story';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { mergeMap, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService extends BaseService {
  stories: any[];
  constructor(public http: HttpClient) {
    super(http);
    this.navUrl = 'showstories.json';
  }
}
