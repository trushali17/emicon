import { Component, OnInit , Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-ourclients',
  templateUrl: './ourclients.component.html',
  styleUrls: ['./ourclients.component.scss']
})
export class OurclientsComponent implements OnInit {

  customOptions: any = {
    items:4,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  constructor() {}

  ngOnInit() {}
}
