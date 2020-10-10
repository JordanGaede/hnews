import { JobService } from './../services/jobs.service';
import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class JobResolver implements Resolve<any> {
    constructor(private apiService: JobService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.apiService.loadNewsItems()
    }
}