import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonService } from './common.service';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule],
  declarations: [ AppComponent, HelloComponent,ChildComponent ],
  bootstrap:    [ AppComponent ],
  providers:[CommonService]
})
export class AppModule { }
