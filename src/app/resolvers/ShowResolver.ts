import { ShowService } from './../services/show.service';
import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class ShowResolver implements Resolve<any> {
    constructor(private apiService: ShowService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.apiService.loadNewsItems();
    }
}