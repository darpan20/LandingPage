import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;

  // size(){
  //   document.getElementById("circle1").style.width="20px";
  //   document.getElementById("circle1").style.height="20px";
  //   document.getElementById("circle2").style.width="30px";
  //   document.getElementById("circle2").style.height="30px";
  //   document.getElementById("circle1").style.marginLeft="12.75vw";
  //   document.getElementById("circle1").style.marginTop="-10vh";
  //   document.getElementById("circle2").style.marginLeft="12.4vw";
  //   document.getElementById("circle2").style.marginTop="-10.7vh"; 
  // }
  file(){
    document.getElementById("option").style.visibility="visible";
  }
  close(){
    document.getElementById("option").style.visibility="hidden";
    // document.getElementById("vid")=true;
  }
  // validateForm(){
    
    //your name
    // if(document.forms["myForm"]["headname"].value=="" )
    //  {
    //   // document.forms["myForm"]["btn"].disabled=true;
    //   document.getElementById("hn2").style.visibility="hidden";
    //   document.getElementById("hn1").style.visibility="visible";}
    //  else if(document.forms["myForm"]["headname"].value.length<4)
    //  {
    //   //  document.forms["myForm"]["btn"].disabled=true;
    //  document.getElementById("hn2").style.visibility="visible";
    //  document.getElementById("hn1").style.visibility="hidden";}
    //  else{
    //   //  document.forms["myForm"]["btn"].disabled=false;
    //  document.getElementById("hn2").style.visibility="hidden";
    //  document.getElementById("hn1").style.visibility="hidden";}
    //  //mobileno
    //  if(document.forms["myForm"]["headmobileno"].value=="" )
    //  {
    //   // document.forms["myForm"]["btn"].disabled=true;
    //   document.getElementById("hm2").style.visibility="hidden";
    //   document.getElementById("hm1").style.visibility="visible";}
    //  else if(document.forms["myForm"]["headmobileno"].value.length<10)
    //  {
    //   //  document.forms["myForm"]["btn"].disabled=true;
    //  document.getElementById("hm2").style.visibility="visible";
    //  document.getElementById("hm1").style.visibility="hidden";}
    //  else{
    //   //  document.forms["myForm"]["btn"].disabled=false;
    //  document.getElementById("hm2").style.visibility="hidden";
    //  document.getElementById("hm1").style.visibility="hidden";}
    //   //designation
    //   if(document.forms["myForm"]["headdesignation"].value=="" )
    //   {
    //    // document.forms["myForm"]["btn"].disabled=true;
    //    document.getElementById("hd2").style.visibility="hidden";
    //    document.getElementById("hd1").style.visibility="visible";}
    //   else if(document.forms["myForm"]["headdesignation"].value.length<3)
    //   {
    //    //  document.forms["myForm"]["btn"].disabled=true;
    //   document.getElementById("hd2").style.visibility="visible";
    //   document.getElementById("hd1").style.visibility="hidden";}
    //   else{
    //    //  document.forms["myForm"]["btn"].disabled=false;
    //   document.getElementById("hd2").style.visibility="hidden";
    //   document.getElementById("hd1").style.visibility="hidden";}
    
  // };
  public constructor() {
    this.captures = [];
    }
    public ngOnInit() {
    }
    public ngAfterViewInit() {
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
              this.video.nativeElement.src = window.URL.createObjectURL(stream);
              this.video.nativeElement.play();
          });
      }
  }
  
  public capture() {
      var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 110,70,480,640,270,355, 440, 280);
      this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  }
}
