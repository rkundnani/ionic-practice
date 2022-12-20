import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
// import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

import { HomePageRoutingModule } from './home-routing.module';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
// import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  // providers: [Vibration,NativeAudio,SocialSharing]
  providers: [Vibration,SocialSharing]
})
export class HomePageModule {}
