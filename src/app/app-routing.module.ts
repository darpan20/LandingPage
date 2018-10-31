import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form3Component}     from './form3/form3.component';
import { Form2Component}     from './form2/form2.component';
import { FormComponent}     from './form/form.component';
import {CanDeactivateGuardService} from './can-deactivate-guard.service'
import {CanDeactivate2GuardService} from './can-deactivate-guard.service'
import {CanDeactivate3GuardService} from './can-deactivate-guard.service'
const routes: Routes = [
  {path: '', redirectTo: 'form',pathMatch: 'full'},
  { path: 'form3', component: Form3Component, canDeactivate:[CanDeactivate3GuardService] },
  { path: 'form2', component: Form2Component, canDeactivate:[CanDeactivate2GuardService] },
  { path: 'form', component: FormComponent, canDeactivate:[CanDeactivateGuardService] }
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}