import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentRoute:string|undefined;
  constructor(private router: ActivatedRoute) { 
    this.router.url.subscribe((url:any) => {
      this.currentRoute = url[0].path;
    })
  }

  ngOnInit(): void {
  }
}
