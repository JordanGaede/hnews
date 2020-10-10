import { BestStoriesService } from './../services/best-stories.service';
import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class BestStoriesResolver implements Resolve<any> {
    constructor(private apiService: BestStoriesService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.apiService.loadNewsItems()
    }
}