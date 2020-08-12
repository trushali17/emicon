import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-ourfeatures',
  templateUrl: './ourfeatures.component.html',
  styleUrls: ['./ourfeatures.component.scss']
})
export class OurfeaturesComponent implements OnInit {

  constructor(public wow:NgwWowService) { }

  ngOnInit() {
    this.wow.init();
  }
  // ngAfterViewInit() {
  //   this.wow.init()
  // }

}
