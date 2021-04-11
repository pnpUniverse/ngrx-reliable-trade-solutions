import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'reliable-trade-solutions';
  collapse: boolean = true;
  selectedIndex: any = null;
  myRoutes = [
    {
      name : 'Home',
      url: '/'
    },
    {
      name : 'About US',
      url: '/about-us'
    },
    {
      name : 'Services',
      url: '/services'
    },
    {
      name : 'Service',
      url: '/service'
    },
    {
      name : 'Membersip',
      url: '/membersip'
    },
    {
      name : 'Track Record',
      url: '/track-record'
    },
    {
      name : 'Contact US',
      url: '/contact-us'
    }
  ]
  services:any;
  contact_us_content: any;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        const result = this.myRoutes.findIndex(function(object) {
          return object.url == val.url;
        });
        if(result > -1) {
          this.selectedIndex = result; 
        }
      }
    });
    this.authService.retrieve('services').subscribe((res) => {
      if(res && res['data'] && res['data']){
        this.services = res['data'];
      }
    });

    this.authService.retrieveBySlug('contact_us_content', 'contact_us_content').subscribe((res) => {
      if(res && res['data'] && res['data']['_id']){
        this.contact_us_content = res['data'];
      }
    });
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }
}
