import { HttpClient } from '@angular/common/http';
import { Header } from './../models/header';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService extends BaseService {

  baseNaveItems: Header[] = [
    { title: 'New', icon: 'fiber_new', route: '/newest'},
    { title: 'Past', icon: 'history', route: '/past'},
    { title: 'Comment', icon: 'comment', route: '/newcomments'},
    { title: 'Ask', icon: 'contact_support', route: '/ask'},
    { title: 'Show', icon: 'present_to_all', route: '/show'},
    { title: 'Jobs', icon: 'business', route: '/jobs'},
    { title: 'Submit', icon: 'note_add', route: '/submit'}
  ]
  constructor(public http: HttpClient) { 
    super(http)

  }
  
  public get headerItems() : Header[] {
    return this.baseNaveItems;
  }
  
}
