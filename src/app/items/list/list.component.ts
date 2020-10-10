import { ShowService } from './../../services/show.service';
import { BestStoriesService } from './../../services/best-stories.service';
import { JobService } from './../../services/jobs.service';
import { AskService } from './../../services/ask.service';
import { PastService } from './../../services/past.service';
import { NewStoriesService } from './../../services/new-stories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  newStoryItems: any;
  data: any;
  service: any;
  constructor(private route: ActivatedRoute, private router: Router, private newStoriesService: NewStoriesService, private pastService: PastService, private askService: AskService, private jobService: JobService, private bestStoriesService: BestStoriesService, private showService: ShowService) {
  }

  ngOnInit(): void {
    switch (this.route.snapshot.routeConfig.path) {
      case 'beststories':
        this.service = this.bestStoriesService;
        break;
      case 'newest':
        this.service = this.newStoriesService;
        break;
      case 'past':
        this.service = this.pastService;
        break;
      case 'ask':
        this.service = this.askService;
        break;
      case 'jobs':
        this.service = this.jobService;
        break;
      case 'show':
        this.service = this.showService;
        break;
      default:
        break;
    }
    
    this.newStoryItems = this.route.snapshot.data;
    this.route.data.subscribe(resp => {
      resp.data.map(items => {
        if (items.url) {
          items['displayUrl'] = this.extractHostname(items.url);
        }
        return items;
      })
    });
  }

  onScroll() {
    this.service.setLimit(10);
    this.service.setStartAt(this.newStoryItems.data.length);
    this.service.loadNewsItems().subscribe(resp => {
      this.newStoryItems.data = [...this.newStoryItems.data, ...resp];
    })
  }

  onUpvote(itemId: Number) {
    this.router.navigate(['/login']);
  }

  extractHostname(url: string): string {
    let hostname;

    // remove protocol
    if (url.indexOf('//') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    if (url.indexOf('www.') > -0) {
      hostname = url.split('www.')[1];
    }
    hostname = hostname.split('.')[0];
    // remove port
    hostname = hostname.split(':')[0];
    // remove query
    hostname = hostname.split('?')[0];
    return hostname;
  }


}
