import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { Story } from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getIdComment(id: String) {
    return this.http.get(`${this.itemIdUrl}/${id}.json?print=pretty`);
  }
  public getComments(id: String) {
    return this.http.get(`${this.itemIdUrl}/${id}.json?print=pretty`).pipe(
      mergeMap((data: any) => { 
        if (!data.kids) return [];
        return forkJoin(data.kids.map((id) => this.http.get(`${this.itemIdUrl}/${id}.json?print=pretty`)));})
    );
  } 
}