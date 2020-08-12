import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.scss']
})
export class SecondpageComponent implements OnInit, AfterViewInit {

  constructor(private wowservice: NgwWowService) { }

  ngAfterViewInit() {
    
    this.wowservice.init();
  }
  ngOnInit() {
    this.wowservice.init();
  }
  // reset(){
  //   this.wowservice.init();
  // }

}
