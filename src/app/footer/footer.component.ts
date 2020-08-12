import { Component, OnInit, ViewChild, Renderer2, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CtrlService } from "../ctrl.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  gamma: boolean = true;
  @ViewChild("bob", { static: true }) bob;
  @ViewChild("head", { static: true }) head;
  @ViewChild("head2", { static: true }) head2;
  @ViewChild("main", { static: true }) main;
  @ViewChild("b1", { static: true }) b1;
  @ViewChild("b2", { static: true }) b2;
  @ViewChild("hox", { static: true }) hox;
  @ViewChild("hox2", { static: true }) hox2;
  @ViewChild("line", { static: true }) line;
  @ViewChild("cp", { static: true }) cp;
  @ViewChild("set", { static: true }) set;
  @ViewChild("set2", { static: true }) set2;
  @Input() garbage;
  constructor(public renderer: Renderer2, public ctrl: CtrlService) {}
  submit(form) {
    console.log("love is alive");
  }
  ngOnInit() {
    if (window.screen.width < 768) {
      this.renderer.setStyle(this.set.nativeElement, "display", "none");
      this.renderer.setStyle(this.set2.nativeElement, "display", "block");
      this.renderer.setStyle(this.main.nativeElement, "height", "90vh");
    }
    if (this.garbage) {
      // this.renderer.setStyle(this.bob.nativeElement, "display", "none");
      // this.renderer.setStyle(this.head.nativeElement, "display", "none");
      // this.renderer.setStyle(this.head2.nativeElement, "display", "none");
      this.renderer.addClass(this.main.nativeElement,'gamma');
      if (window.screen.width < 768) {
        this.renderer.setStyle(this.main.nativeElement, "height", "5vh");
        this.renderer.setStyle(this.set.nativeElement, "display", "none");
      }
      if (window.screen.width < 1590 && window.screen.width > 768) {
        this.renderer.setStyle(this.b1.nativeElement, "padding-top", "0vh");
        this.renderer.setStyle(this.b2.nativeElement, "padding-top", "2vh");
        this.renderer.setStyle(this.main.nativeElement, "height", "40vh");
        this.renderer.setStyle(this.b1.nativeElement, "height", "40vh");
        this.renderer.setStyle(this.b2.nativeElement, "height", "40vh");
        this.renderer.setStyle(this.hox.nativeElement, "top", "12%");
        this.renderer.setStyle(this.line.nativeElement, "top", "30vh");
        this.renderer.setStyle(this.cp.nativeElement, "top", "34vh");
        this.renderer.setStyle(this.hox2.nativeElement, "top", "12%");
      } 
      if(window.screen.width>1600)
      this.renderer.setStyle(this.main.nativeElement, "height", "30vh");
    }
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm;
    }
    this.ctrl.userData = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }
}
