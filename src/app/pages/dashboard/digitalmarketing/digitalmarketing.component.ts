import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-digitalmarketing',
  templateUrl: './digitalmarketing.component.html',
  styleUrls: ['./digitalmarketing.component.scss']
})
export class DigitalmarketingComponent implements OnInit {

  constructor(private wowservice: NgwWowService) { }

  ngOnInit() {
    this.wowservice.init();
    window.scrollTo(0,0);
  }
  public myFunction1() {
    var x = document.getElementById("myDIV1");
    var y = document.getElementById("myDIV2");
    var z = document.getElementById("myDIV3");
    if (window.getComputedStyle(x, null).getPropertyValue("display") === 'none') {
      x.style.display = "block";
      z.style.display = "none";
      y.style.display = "none";
    } else {
      x.style.display = "none";
    }
}
  public myFunction2() {
    var x = document.getElementById("myDIV1");
    var y = document.getElementById("myDIV2");
    var z = document.getElementById("myDIV3");
    if (window.getComputedStyle(y, null).getPropertyValue("display") === 'none') {
      y.style.display = "block";
      x.style.display = "none";
      z.style.display = "none";
    } else {
      y.style.display = "none";
    }
}
  public myFunction3() {
    var x = document.getElementById("myDIV1");
    var y = document.getElementById("myDIV2");
    var z = document.getElementById("myDIV3");
    if (window.getComputedStyle(z, null).getPropertyValue("display") === 'none') {
      z.style.display = "block";
      x.style.display = "none";
      y.style.display = "none";
    } else {
      z.style.display = "none";
    }
}

}
