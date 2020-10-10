import { concatMap, mergeMap, switchMap, map } from 'rxjs/operators';
import { CommentsService } from './../services/comments.service';
import { NewStoriesService } from './../services/new-stories.service';
import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

@Injectable()
export class CommentsResolver implements Resolve<any> {
    constructor(private apiService: CommentsService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.apiService.getComments(route.paramMap.get('id'));
    }
}