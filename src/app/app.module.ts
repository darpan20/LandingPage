import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';

import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import {CanDeactivateGuardService} from './can-deactivate-guard.service'
import {CanDeactivate2GuardService} from './can-deactivate-guard.service'
import {CanDeactivate3GuardService} from './can-deactivate-guard.service'
import { AppRoutingModule } from './/app-routing.module';
import {CustomMaterial} from './material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    Form2Component,
    Form3Component,
 
   
  ],
  imports: [
    BrowserModule,
    CustomMaterial,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [CanDeactivateGuardService,CanDeactivate2GuardService,CanDeactivate3GuardService],
  
  bootstrap: [AppComponent]
})
// export class PizzaPartyAppModule { }
export class AppModule { }
