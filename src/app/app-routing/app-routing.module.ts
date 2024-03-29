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
import {final30MinLogConstants} from '../../final30min';
import {weeklyLogConstants} from '../../weekly';


const appRoutes:Routes = [
  {path:'weekly',component:LogComponent,data:{type:'weekly',logConstants: weeklyLogConstants  }},
  {path:'final30min',component:LogComponent,data:{type:'final30min',logConstants: final30MinLogConstants  }},
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
