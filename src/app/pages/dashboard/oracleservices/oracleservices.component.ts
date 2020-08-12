import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oracleservices',
  templateUrl: './oracleservices.component.html',
  styleUrls: ['./oracleservices.component.scss']
})
export class OracleservicesComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }
  @HostListener("document:scroll")

  scrollfunction() {
    // if (document.documentElement.scrollTop > 1000) {
    //   console.log(document.documentElement.scrollTop );
    // }
  }
  ngOnInit() {
    window.scrollTo(0,0);
    let frag;
    this.route.fragment.subscribe (res=>{
      frag = res;
    });
    if(frag=='bi') {
      window.scrollTo(0,5200);
    }
    if(frag=='business') {
      window.scrollTo(0,400);
    }
    if(frag=='erp') {
      window.scrollTo(0,1200);
    }
    if(frag=='hcm') {
      window.scrollTo(0,1800);
    }
    if(frag=='scm') {
      window.scrollTo(0,2500);
    }
    if(frag=='man') {
      window.scrollTo(0,3200);
    }
    if(frag=='cx') {
      window.scrollTo(0,3900);
    }    
    if(frag=='paas') {
      window.scrollTo(0,4500);
    }
  }

}
