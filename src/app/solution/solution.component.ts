import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from "@angular/core";
import { NgwWowService } from "ngx-wow";
import { Router } from "@angular/router";

@Component({
  selector: "app-solution",
  templateUrl: "./solution.component.html",
  styleUrls: ["./solution.component.scss"]
})
export class SolutionComponent implements OnInit {
  @ViewChild("head", { static: true }) head: ElementRef;
  mobile = false;
  config;
  fullpage_api;
  constructor(private router: Router) {
    if (window.screen.width > 442)
      this.config = {
        licenseKey: "YOUR LICENSE KEY HERE",
        sectionsColor: [
          "white",
          "whitesmoke",
          "white",
          "whitesmoke",
          "white",
          "whitesmoke",
          "white"
        ],
        anchors: ["p1", "p2", "p3", "p4", "p5", "p6", "p7"],
        navigation: true,
        fitToSection: false,
        autoScrolling: true
        // scrollBar:true
      };
    else {
      this.mobile = true;
      this.config = {
        licenseKey: "YOUR LICENSE KEY HERE",
        sectionsColor: [
          "white",
          "whitesmoke",
          "white",
          "whitesmoke",
          "white",
          "whitesmoke",
          "white"
        ],
        anchors: ["p1", "p2", "p3", "p4", "p5", "p6", "p7"],
        navigation: false,
        fitToSection: false,
        autoScrolling: false,
        responsiveHeight: 1
        // scrollBar:true
      };
    }
  }
  gof(text) {
    let str = "/oracle-services" + "/";
    this.router.navigate([str], { fragment: "bi" });
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    // this.wow.init();
    console.log(window.screen.width);
    console.log(window.screen.height);
  }
  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
