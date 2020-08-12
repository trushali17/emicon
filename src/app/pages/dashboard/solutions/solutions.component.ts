import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  public show1:boolean = false;
  public show2:boolean = false;
  public show3:boolean = false;
  public show4:boolean = false;
  public show5:boolean = false;
  public showimg:boolean = true;
  public buttonName:any = 'Show';
  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }
//   public openit1(){
//     if(this.showimg == true){
//       this.showimg = false;
//       this.show1 = true;
//       this.show2 = false;
//       this.show3 = false;
//       this.show4 = false;
//       this.show5 = false;
//     }
//     else if( this.showimg  == false && this.show1 == false){
//       this.show2 = false;
//       this.show1 = true;
//       this.show3 = false;
//       this.show4 = false;
//       this.show5 = false;
//     }
//     else{
//       this.showimg = true;
//       this.show1 = false;
//       this.show2 = false;
//       this.show3 = false;
//       this.show4 = false;
//       this.show5 = false;
//     }
//   }
//   public close1(){
//     this.showimg = true;
//     this.show1 = false;
//   }
//     public openit2(){
//       if(this.showimg == true){
//         this.showimg = false;
//         this.show1 = false;
//         this.show2 = true;
//         this.show3 = false;
//         this.show4 = false;
//         this.show5 = false;
//       }
//       else if( this.showimg  == false && this.show2 == false){
//         this.show2 = true;
//         this.show1 = false;
//         this.show3 = false;
//         this.show4 = false;
//         this.show5 = false;
//       }
//       else{
//         this.showimg = true;
//         this.show2 = false;
//         this.show1 = false;
//         this.show3 = false;
//         this.show4 = false;
//         this.show5 = false;
//       }
//   }
//   public close2(){
//     this.showimg = true;
//     this.show2 = false;
//   }
//   public openit3(){
//     if(this.showimg == true){
//       this.showimg = false;
//       this.show1 = false;
//       this.show2 = false;
//       this.show3 = true;
//       this.show4 = false;
//       this.show5 = false;
//     }
//     else if( this.showimg  == false && this.show3 == false){
//       this.show2 = false;
//       this.show1 = false;
//       this.show3 = true;
//       this.show4 = false;
//       this.show5 = false;
//     }
//     else{
//       this.showimg = true;
//       this.show3 = false;
//       this.show1 = false;
//       this.show2 = false;
//       this.show4 = false;
//       this.show5 = false;
//     }
// }
// public close3(){
//   this.showimg = true;
//   this.show3 = false;
// }
// public openit4(){
//   if(this.showimg == true){
//     this.showimg = false;
//     this.show1 = false;
//     this.show2 = false;
//     this.show3 = false;
//     this.show4 = true;
//     this.show5 = false;
//   }
//   else if( this.showimg  == false && this.show4 == false){
//     this.show2 = false;
//     this.show1 = false;
//     this.show3 = false;
//     this.show4 = true;
//     this.show5 = false;
//   }
//   else{
//     this.showimg = true;
//     this.show1 = false;
//     this.show2 = false;
//     this.show3 = false;
//     this.show4 = false;
//     this.show5 = false;
//   }
// }
// public close4(){
//   this.showimg = true;
//   this.show4 = false;
// }
// public openit5(){
//   if(this.showimg == true){
//     this.showimg = false;
//     this.show1 = false;
//     this.show2 = false;
//     this.show3 = false;
//     this.show4 = false;
//     this.show5 = true;
//   }
//   else if( this.showimg  == false && this.show5 == false){
//     this.show2 = false;
//     this.show1 = false;
//     this.show3 = false;
//     this.show4 = false;
//     this.show5 = true;
//   }
//   else{
//     this.showimg = true;
//     this.show1 = false;
//     this.show2 = false;
//     this.show3 = false;
//     this.show4 = false;
//     this.show5 = false;
//   }
// }
// public close5(){
//   this.showimg = true;
//   this.show5 = false;
// }
}
