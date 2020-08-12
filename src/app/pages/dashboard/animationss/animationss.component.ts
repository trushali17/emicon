import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animationss',
  templateUrl: './animationss.component.html',
  styleUrls: ['./animationss.component.scss']
})
export class AnimationssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
