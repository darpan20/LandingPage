import { CanDeactivate } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { Form2Component } from "./form2/form2.component";
import { Form3Component } from "./form3/form3.component";
import { Injectable } from "@angular/core";
@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<FormComponent>{
    canDeactivate(component: FormComponent):  boolean{
       if(document.forms["myForm"]["select1"].value==0){document.getElementById("s1").style.visibility="visible";}
       if(document.forms["myForm"]["select1"].value!=0){document.getElementById("s1").style.visibility="hidden";}
       if(document.forms["myForm"]["name"].value==""){document.getElementById("na1").style.visibility="visible";}
       if(document.forms["myForm"]["name"].value!=""){document.getElementById("na1").style.visibility="hidden";}
       if(document.forms["myForm"]["name"].value.length<4 && document.forms["myForm"]["name"].value!=""){document.getElementById("na2").style.visibility="visible";}
       if(document.forms["myForm"]["name"].value.length>=4){document.getElementById("na2").style.visibility="hidden";}
       if(document.forms["myForm"]["address"].value==""){document.getElementById("add1").style.visibility="visible";}
       if(document.forms["myForm"]["address"].value!=""){document.getElementById("add1").style.visibility="hidden";}
       if(document.forms["myForm"]["address"].value.length<4 && document.forms["myForm"]["address"].value!=""){document.getElementById("add2").style.visibility="visible";}
       if(document.forms["myForm"]["address"].value.length>=4){document.getElementById("add2").style.visibility="hidden";}
       if(document.forms["myForm"]["select2"].value==0){document.getElementById("s2").style.visibility="visible";}
       if(document.forms["myForm"]["select2"].value!=0){document.getElementById("s2").style.visibility="hidden";}
       if(document.forms["myForm"]["select3"].value==0){document.getElementById("s3").style.visibility="visible";}
       if(document.forms["myForm"]["select3"].value!=0){document.getElementById("s3").style.visibility="hidden";}
       if(document.forms["myForm"]["city"].value==0){document.getElementById("ci1").style.visibility="visible";}
       if(document.forms["myForm"]["city"].value!=0){document.getElementById("ci1").style.visibility="hidden";}
       if(document.forms["myForm"]["select1"].value!=0 
        && document.forms["myForm"]["name"].value!="" 
        && document.forms["myForm"]["name"].value.length>=4 
        && document.forms["myForm"]["address"].value!=""
        && document.forms["myForm"]["address"].value.length>=4
        && document.forms["myForm"]["select2"].value!=0
        && document.forms["myForm"]["select3"].value!=0
        && document.forms["myForm"]["city"].value!=0)
        {
            return true;
        }
    }
}
export class CanDeactivate2GuardService implements CanDeactivate<Form2Component>{
    canDeactivate(component: Form2Component):  boolean{
        if(document.forms["myForm"]["yourname"].value=="" ){document.getElementById("name1").style.visibility="visible";}
        if(document.forms["myForm"]["yourname"].value!=""){document.getElementById("name1").style.visibility="hidden";}
        if(document.forms["myForm"]["yourname"].value.length<4 && document.forms["myForm"]["yourname"].value!=""){document.getElementById("name2").style.visibility="visible";}
        if(document.forms["myForm"]["yourname"].value.length>=4){document.getElementById("name2").style.visibility="hidden";}
        if(document.forms["myForm"]["mobileno"].value=="" ){document.getElementById("mobileno1").style.visibility="visible";}
        if(document.forms["myForm"]["mobileno"].value!="" ){document.getElementById("mobileno1").style.visibility="hidden";}
        if(document.forms["myForm"]["mobileno"].value.length<10 && document.forms["myForm"]["mobileno"].value!=""){document.getElementById("mobileno2").style.visibility="visible";}
        if(document.forms["myForm"]["mobileno"].value.length>=10){document.getElementById("mobileno2").style.visibility="visible";}
        if(document.forms["myForm"]["designation"].value=="" ){document.getElementById("designation1").style.visibility="visible";}
        if(document.forms["myForm"]["designation"].value!="" ){document.getElementById("designation1").style.visibility="hidden";}
        if(document.forms["myForm"]["designation"].value.length<3 && document.forms["myForm"]["designation"].value!=""){document.getElementById("designation2").style.visibility="visible";}
        if(document.forms["myForm"]["designation"].value.length>=3){document.getElementById("designation2").style.visibility="hidden";}
        if(document.forms["myForm"]["yourname"].value!=""
         && document.forms["myForm"]["yourname"].value.length>=4
         && document.forms["myForm"]["mobileno"].value!="" 
         && document.forms["myForm"]["mobileno"].value.length>=10
         && document.forms["myForm"]["designation"].value!=""
         && document.forms["myForm"]["designation"].value.length>=3){return true;}
    }
}
export class CanDeactivate3GuardService implements CanDeactivate<Form3Component>{
    canDeactivate(component: Form3Component):  boolean{
        if(document.forms["myForm"]["headname"].value=="" ){document.getElementById("hn1").style.visibility="visible";}
        if(document.forms["myForm"]["headname"].value!=""){document.getElementById("hn1").style.visibility="hidden";}
        if(document.forms["myForm"]["headname"].value.length<4 && document.forms["myForm"]["headname"].value!=""){document.getElementById("hn2").style.visibility="visible";}
        if(document.forms["myForm"]["headname"].value.length>=4){document.getElementById("hn2").style.visibility="hidden";}
        if(document.forms["myForm"]["headmobileno"].value=="" ){document.getElementById("hm1").style.visibility="visible";}
        if(document.forms["myForm"]["headmobileno"].value!="" ){document.getElementById("hm1").style.visibility="hidden";}
        if(document.forms["myForm"]["headmobileno"].value.length<10 && document.forms["myForm"]["headmobileno"].value!=""){document.getElementById("hm2").style.visibility="visible";}
        if(document.forms["myForm"]["headmobileno"].value.length>=10){document.getElementById("hm2").style.visibility="visible";}
        if(document.forms["myForm"]["headdesignation"].value=="" ){document.getElementById("hd1").style.visibility="visible";}
        if(document.forms["myForm"]["headdesignation"].value!="" ){document.getElementById("hd1").style.visibility="hidden";}
        if(document.forms["myForm"]["headdesignation"].value.length<3 && document.forms["myForm"]["headdesignation"].value!=""){document.getElementById("hd2").style.visibility="visible";}
        if(document.forms["myForm"]["headdesignation"].value.length>=3){document.getElementById("hd2").style.visibility="hidden";}
        if(document.forms["myForm"]["headname"].value!=""
         && document.forms["myForm"]["headname"].value.length>=4
         && document.forms["myForm"]["headmobileno"].value!="" 
         && document.forms["myForm"]["headmobileno"].value.length>=10
         && document.forms["myForm"]["headdesignation"].value!=""
         && document.forms["myForm"]["headdesignation"].value.length>=3){return true;}
    
    }
}