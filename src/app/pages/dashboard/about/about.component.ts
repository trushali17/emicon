import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  config;
  fullpage_api;
  po="black"
  constructor(public wow:NgwWowService) {

    // this is just an example => for more details on config please visit fullPage.js docs
    if(window.screen.width>442) {
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: ['black', 'whitesmoke', 'white', 'white', 'white'],
      anchors: ['p1', 'p2', 'p3', 'p4', 'p5'],
      navigation: true,
      scrollOverflow: true,
      fitToSection: false,
      autoScrolling: true,
      // scrollBar:true
    };
  }else {
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: ['black', 'whitesmoke', 'white', 'white', 'white'],
      anchors: ['p1', 'p2', 'p3', 'p4', 'p5'],
      navigation: false,
      scrollOverflow: true,
      fitToSection: false,
      autoScrolling: false,
      responsive:true,
      scrollBar:true
    };
  }
  }

  ngOnInit() {
    // this.wow.init();
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}
