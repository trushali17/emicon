import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-servicess',
  templateUrl: './servicess.component.html',
  styleUrls: ['./servicess.component.scss']
})
export class ServicessComponent implements OnInit {
  // imageSrc = 'assets/img/1.png';
  // messageText = '';
  // titles = ['Program Management', 'Capacity Management', 'Upgrades/Migrations', 'Testing'];
  // imageButtons = [ {src:'assets/img/1.png', name: 'Program Management'},
  //  {src:'assets/img/2.png', name: 'Capacity Management'},
  // {src:'assets/img/3.png', name: 'Upgrades/Migrations'},
  // {src:'assets/img/4.png', name: 'Testing'}]
  // constructor() { }

  // ngOnInit() {
  // }
  // onClick(imageNameObject) {
  //   this.imageSrc = imageNameObject.src;
  //   this.messageText = imageNameObject.name;
  // }
  currentSlide = 0;
  show: boolean = true;
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  elements = [

    {
      title: 'Contextualized Training',
      // description:'Adipisci atque, corporis dicta doloribus eius enim esse fugit iure non quaerat, quod.',
      img: '4'
    },
    {
      title: 'Capacity Management',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: '1'
    },
    {
      title: 'Upgrades / Migrations',
      // description: 'Aliquid aspernatur, assumenda cumque esse, excepturi magni mollitia.',
      img: '2'
    },
    {
      title: 'Testing',
      // description: 'Accusamus cum debitis earum, ex illum impedit in incidunt ipsa.',
      img: 'datatables'
    }
  ];

  constructor(public renderer: Renderer2) {
  }

  ngOnInit() {
  }
  public close1(){
    this.show = true;
    this.show1 = false;
  }
  public close2(){
    this.show = true;
    this.show2 = false;
  }
  public close3(){
    this.show = true;
    this.show3 = false;
  }
  public close4(){
    this.show = true;
    this.show4 = false;
  }
  updateSlider(currentSlide) {
    this.currentSlide = currentSlide;
    if(this.currentSlide == 0 ){
      this.show = true;
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
    }
    if(this.currentSlide == 1 ){
      this.show =false;
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
    }
    if(this.currentSlide == 2 ){
      this.show = false;
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      this.show4 = false;
    }
    if(this.currentSlide == 3 ){
      this.show = false;
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
      this.show4 = false;
    }
    if(this.currentSlide == 4 ){
      this.show = false;
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
    }
  }

  public onIndexChange(index: number): void {
    if(index == 0){
    this.currentSlide = 1;
    }
    else{
    this.currentSlide = index;
    }
  }

}
