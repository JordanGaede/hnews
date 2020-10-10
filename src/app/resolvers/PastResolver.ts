import { PastService } from './../services/past.service';
import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class PastResolver implements Resolve<any> {
    constructor(private apiService: PastService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.apiService.loadNewsItems()
    }
}