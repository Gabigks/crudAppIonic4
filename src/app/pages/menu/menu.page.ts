import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'User',
      url: 'users'
    },
    {
      title: 'Add User',
      url: 'adduser'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) { 
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
