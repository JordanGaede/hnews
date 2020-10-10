import { AskService } from './../services/ask.service';
import { BestStoriesService } from './../services/best-stories.service';
import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class AskResolver implements Resolve<any> {
    constructor(private apiService: AskService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.apiService.loadNewsItems()
    }
}