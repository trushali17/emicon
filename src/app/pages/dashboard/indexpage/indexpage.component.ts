import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren,
  HostListener,
  ElementRef
} from "@angular/core";
import { NavComponent } from "src/app/nav/nav.component";
import * as $ from "jquery";

@Component({
  selector: "app-indexpage",
  templateUrl: "./indexpage.component.html",
  styleUrls: ["./indexpage.component.scss"]
})
export class IndexpageComponent implements OnInit {
  @ViewChild("master", { static: true }) master: NavComponent;
  @ViewChild("btn", { static: true }) btn: ElementRef;
  @ViewChild("target", { static: true }) target: ElementRef;
  @HostListener("document:scroll")

  scrollfunction() {
    if (document.documentElement.scrollTop > 1000) {
      // console.log(document.documentElement.scrollTop )
      this.renderer.setStyle(this.btn.nativeElement,'display','block');
    } else {
      this.renderer.setStyle(this.btn.nativeElement,'display','none');
    }
  }
  state = "normal";

  constructor(public renderer: Renderer2, public el: ElementRef) {}

  scrollToElement(element): void {
    console.log(element);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    this.renderer.listen(this.master.home.nativeElement,'click',()=>{
      console.log("even this is good");
      this.target.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    let images = this.el.nativeElement.querySelectorAll("#slideshow .bg");
    var numImages = images.length;
    console.log(images);
    var duration = 20;
    var fadeAmount = 0.3;
    var durationMs = duration * 1000;
    var imageTime = durationMs / numImages;
    var fadeTime = imageTime * fadeAmount;
    var visibleTime = imageTime - imageTime * fadeAmount * 2;
    var animDelay = visibleTime * (numImages - 1) + fadeTime * (numImages - 2);
    images.forEach(function(element, index) {
      if (index != 0) {
        $(element).css("opacity", "0");
        $(element).css("transform;", "scale(1.15)");
        setTimeout(function() {
          doAnimationLoop(element, fadeTime, visibleTime, fadeTime, animDelay);
        }, visibleTime * index + fadeTime * (index - 1));
      } else {
        setTimeout(function() {
          $(element).animate({ opacity: 0 }, fadeTime, function() {
            setTimeout(function() {
              doAnimationLoop(
                element,
                fadeTime,
                visibleTime,
                fadeTime,
                animDelay
              );
            }, animDelay);
          });
        }, visibleTime);
      }
    });

    function doAnimationLoop(
      element,
      fadeInTime,
      visibleTime,
      fadeOutTime,
      pauseTime
    ) {
      fadeInOut(element, fadeInTime, visibleTime, fadeOutTime, function() {
        setTimeout(function() {
          doAnimationLoop(
            element,
            fadeInTime,
            visibleTime,
            fadeOutTime,
            pauseTime
          );
        }, pauseTime);
      });
    }

    function fadeInOut(element, fadeIn, visible, fadeOut, onComplete) {
      return $(element)
        .animate({ opacity: 1 }, fadeIn)
        .delay(visible)
        .animate({ opacity: 0 }, fadeOut, onComplete);
    }
  }
}
