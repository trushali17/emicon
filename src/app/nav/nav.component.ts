import { Component, OnInit, ViewChild, Renderer2, AfterViewInit, ElementRef, HostListener, Input } from '@angular/core';
import * as $ from 'jquery'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit, AfterViewInit {

  color = false;
  toto = false;
  constructor(public renderer: Renderer2, public el: ElementRef,public router:Router) { }


  @ViewChild('logo', { static: true }) logo: ElementRef;
  @ViewChild('mnav', { static: true }) naav: ElementRef;
  @ViewChild('bur', { static: true }) bur: ElementRef;
  @ViewChild('ro', { static: true }) ro: ElementRef;
  @ViewChild('sub', { static: true }) sub: ElementRef;
  @ViewChild('icon', { static: true }) icon: ElementRef;
  @ViewChild('home', { static: true }) home: ElementRef;
  @Input() coloro: string;


  @HostListener("document:scroll")
  scrollfunction() {
    if (document.documentElement.scrollTop > 100) {
      // console.log(this.color)
      this.color = true;
    } else {
      // console.log(this.color)
      this.color = false
    }
  }
  flag = true;
  ngAfterViewInit() {
  }
  go() {
    if (!this.bur.nativeElement.classList.contains('is-active')) {
      this.renderer.setStyle(this.naav.nativeElement, 'display', 'block');
    }
    else {
      this.renderer.setStyle(this.naav.nativeElement, 'display', 'none');
    }
  }
  ngOnInit() {
    console.log(window.screen.width+ " " +window.screen.height);
    if (this.coloro != undefined) {
      this.toto = true;
    }
    const burger = document.getElementById('burger');
    if (burger !== undefined)
      burger.addEventListener('click', toggleNav);

    function toggleNav() {
      burger.classList.contains('is-active') ? burger.classList.remove('is-active') : burger.classList.add('is-active');
    }
    var clients = document.getElementById('clients');
    var nav = document.getElementsByClassName('subnavigation');
    var services = document.getElementById('services');
    clients.addEventListener('click', function () {
      $(clients).toggleClass("active");
      $(".parent:not(#clients)").toggleClass("invisible");
    }, true);
  }
  fun() {
    console.log('clicked')
    this.router.navigateByUrl('/')
  }
  open() {
    var li = this.el.nativeElement.querySelectorAll('.rent');
    var hr = this.el.nativeElement.querySelectorAll('hr');
    console.log(hr);
    if (this.flag) {
      li.forEach((element,index) => {
        console.log(element);
        this.renderer.addClass(element, 'invisible');
        this.renderer.addClass(this.sub.nativeElement, 'actv');
        if(index<5) {
          if(index!=3)
          this.renderer.addClass(hr[index],'invisible');
        }
        this.flag = false;
      });
    } else {
      console.log('y')
      li.forEach((element,index) => {
        if(index<5) {
          this.renderer.removeClass(hr[index],'invisible');
        }
        this.renderer.removeClass(element, 'invisible');
        this.renderer.removeClass(this.sub.nativeElement, 'actv');
        this.flag = true;
      })
    }
  }
}
