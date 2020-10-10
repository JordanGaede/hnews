import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/models/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItems: Header[];
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.navItems = this.headerService.headerItems;
  }

}
