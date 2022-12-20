
import { NgModule } from '@angular/core';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
// import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
// import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule ],
  // providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy } , Vibration,NativeAudio,SocialSharing],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy } , Vibration,SocialSharing],
  bootstrap: [AppComponent],
})
export class AppModule {}
