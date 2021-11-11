import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_BASE_HREF } from '@angular/common';
import { IframeComponent } from './components/iframe/iframe.component';
import { EndpointComponent } from './view-logic/endpoint/endpoint.component';
import { EndpointNavComponent } from './view-logic/endpoint-nav/endpoint-nav.component';


@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule,
    BsDropdownModule.forRoot(), CollapseModule.forRoot(), AppRoutingModule],
  declarations: [AppComponent, NavbarComponent, IframeComponent, EndpointComponent, EndpointNavComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule { }
