import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { Sign1Component } from './sign/sign1/sign1.component';
import { Sign2Component } from './sign/sign2/sign2.component';
import { Sign3Component } from './sign/sign3/sign3.component';
import { Sign4Component } from './sign/sign4/sign4.component';
import { Sign5Component } from './sign/sign5/sign5.component';
import { NpnSliderModule } from '../../npn-slider/src/lib/npn-slider.module';



@NgModule({
  declarations: [    
    AppComponent,    
    HomeComponent,
    Sign1Component,
    Sign2Component,
    Sign3Component,
    Sign4Component,
    Sign5Component,
    jqxComboBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NpnSliderModule,
    HttpClientModule,
    NgxPaginationModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
