import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epm',
  templateUrl: './epm.component.html',
  styleUrls: ['./epm.component.scss']
})
export class EpmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
