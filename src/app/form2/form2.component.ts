import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
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
  // validationForm()
  // {
    //your name
    // if(document.forms["myForm"]["yourname"].value=="" )
    //  {
    //   // document.forms["myForm"]["btn"].disabled=true;
    //   document.getElementById("name2").style.visibility="hidden";
    //   document.getElementById("name1").style.visibility="visible";}
    //  else if(document.forms["myForm"]["yourname"].value.length<4)
    //  {
    //   //  document.forms["myForm"]["btn"].disabled=true;
    //  document.getElementById("name2").style.visibility="visible";
    //  document.getElementById("name1").style.visibility="hidden";}
    //  else{
    //   //  document.forms["myForm"]["btn"].disabled=false;
    //  document.getElementById("name2").style.visibility="hidden";
    //  document.getElementById("name1").style.visibility="hidden";}
    //  //mobileno
    //  if(document.forms["myForm"]["mobileno"].value=="" )
    //  {
    //   // document.forms["myForm"]["btn"].disabled=true;
    //   document.getElementById("mobileno2").style.visibility="hidden";
    //   document.getElementById("mobileno1").style.visibility="visible";}
    //  else if(document.forms["myForm"]["mobileno"].value.length<10)
    //  {
    //   //  document.forms["myForm"]["btn"].disabled=true;
    //  document.getElementById("mobileno2").style.visibility="visible";
    //  document.getElementById("mobileno1").style.visibility="hidden";}
    //  else{
    //   //  document.forms["myForm"]["btn"].disabled=false;
    //  document.getElementById("mobileno2").style.visibility="hidden";
    //  document.getElementById("mobileno1").style.visibility="hidden";}
    //   //designation
    //   if(document.forms["myForm"]["designation"].value=="" )
    //   {
    //    // document.forms["myForm"]["btn"].disabled=true;
    //    document.getElementById("designation2").style.visibility="hidden";
    //    document.getElementById("designation1").style.visibility="visible";}
    //   else if(document.forms["myForm"]["designation"].value.length<3)
    //   {
    //    //  document.forms["myForm"]["btn"].disabled=true;
    //   document.getElementById("designation2").style.visibility="visible";
    //   document.getElementById("designation1").style.visibility="hidden";}
    //   else{
    //    //  document.forms["myForm"]["btn"].disabled=false;
    //   document.getElementById("designation2").style.visibility="hidden";
    //   document.getElementById("designation1").style.visibility="hidden";}
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
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 110,100,480,640,270,355, 440, 280);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
}


}
