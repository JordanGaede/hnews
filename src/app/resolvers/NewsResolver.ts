import { NewStoriesService } from './../services/new-stories.service';
import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class NewsResolvers implements Resolve<any> {
    constructor(private apiService: NewStoriesService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.apiService.loadNewsItems()
    }
}