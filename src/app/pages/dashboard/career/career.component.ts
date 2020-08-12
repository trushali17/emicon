import { Component, OnInit } from "@angular/core";
import { NgwWowService } from "ngx-wow";
declare var $: any;
@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.scss"]
})
export class CareerComponent implements OnInit {
  config;
  fullpage_api;

  constructor(private ngwow: NgwWowService) {
    this.config = {
      licenseKey: "YOUR LICENSE KEY HERE",
      sectionsColor: [
        "transparent",
        "whitesmoke",
        "white",
        "whitesmoke",
        "#7BAABE"
      ],
      anchors: ["p1", "p2", "p3", "p4", "p5"],
      navigation: true,
      live: true,
      scrollBar: true
    };
  }

  ngOnInit() {
    window.scrollTo(0,0);
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
    this.ngwow.init();
  }
  kk() {
    let pageHeight = window.innerHeight + 100;
    window.scrollBy(0, pageHeight);
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
