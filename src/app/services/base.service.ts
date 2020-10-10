import { Story } from './../models/story';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { mergeMap, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  limitToFirst = 30;
  route = `orderBy="$key"&limitToFirst=${this.limitToFirst}`;
  fullUrl: string;
  itemUrl: string;
  http: HttpClient;
  constructor(http) {
    this.http = http;
  }
  
  
  public get baseUrl() : string {
    return environment.apiUrl;
  }

  public get itemIdUrl(): string {
    return `${this.baseUrl}/item`;
  }
  public get commentUrl(): string {
    return `${this.baseUrl}/item`;
  }

  public set navUrl(path : string) {
    this.fullUrl = `${this.baseUrl}/${path}`;
  }
  
  public get navUrl() : string {
    return this.fullUrl;
  }

  fetchQueryParams() : string {
    return this.route;
  }

  setLimit(limit) {
    this.limitToFirst = limit;
  }

  setStartAt(startAt) {
      this.route = `${this.route}&startAt="${startAt}"`;
  }

  loadNewsItems() {
    let route = this.fetchQueryParams();
    return this.http.get(`${this.navUrl}?${route}`).pipe(
      mergeMap((ids: []) => { 
        let filter = ids.filter(id => id !== null);
        return forkJoin(filter.map((id) => this.http.get(`${this.itemIdUrl}/${id}.json?print=pretty`)));
      })
    );  
  }

}