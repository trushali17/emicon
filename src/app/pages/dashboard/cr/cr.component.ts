import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-cr',
  templateUrl: './cr.component.html',
  styleUrls: ['./cr.component.scss']
})
export class CrComponent implements OnInit {
  customOptions: any = {
    items:1,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplaySpeed:2000,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
      // 400: {
      //   items: 2
      // },
      // 740: {
      //   items: 3
      // },
      // 940: {
      //   items: 4
      // }
    },
    nav: false
  }
  constructor() { }

  ngOnInit() {

  }

}
