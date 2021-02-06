import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  classNameCss: string = "";

  constructor() { }
  
  ngOnInit(): void {
    this.classNameCss = "";
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    var y = window.scrollY;
    if (y >= 15) {
      this.classNameCss = "navbar-estatica"
    } else {
      this.classNameCss = ""
    }
  }
}
