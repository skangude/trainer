import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { LogComponent } from '../log/log.component';
import {thirtyMinLogConstants} from '../../30min';
import {nightlyLogConstants} from '../../nightly';
import {locationChangeLogConstants} from '../../locationChange';
import { LogOptionsComponent } from '../log-options/log-options.component';
import { LogResultComponent } from '../log-result/log-result.component';
import {tenMinLogConstants} from '../../10min';

const appRoutes:Routes = [
  {path:'10min',component:LogComponent,data:{type:'10min',logConstants: tenMinLogConstants  }},
  {path:'30min',component:LogComponent,data:{type:'30min',logConstants: thirtyMinLogConstants }},
  {path:'locationChange',component:LogComponent,data:{type:'locationChange',logConstants: locationChangeLogConstants }},
  {path:'nightly',component:LogComponent,data:{type:'nightly',logConstants: nightlyLogConstants }},
  {path:'', component:LogOptionsComponent },
  {path:'logResult',component:LogResultComponent}
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
