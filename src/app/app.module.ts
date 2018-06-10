import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LogOptionsComponent } from './log-options/log-options.component';
import { TenColmBtnComponent } from './log-options/ten-colm-btn/ten-colm-btn.component';
import { LogService } from './log.service';

import {HttpClientModule} from  '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    LogOptionsComponent,
    TenColmBtnComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, HttpClientModule
  ],
  providers: [LogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
