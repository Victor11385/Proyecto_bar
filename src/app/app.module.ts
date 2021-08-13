import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';


//import { Network } from '@ionic-native/network/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [/*Contacts,Contact, ContactField, ContactName, */HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [/*Network,*/
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy  }
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
