import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.scss']
})
export class AdvComponent implements OnInit {

  constructor(private wowservice: NgwWowService) { }

  ngOnInit() {
    this.wowservice.init();
    window.scrollTo(0,0);
  }

}
