import { PersonalModule } from './personal/personal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';

import { IonicModule } from '@ionic/angular';

import { HelloPageRoutingModule } from './hello-routing.module';

import { HelloPage } from './hello.page';
import { ModalModule } from './modal/modal.module';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelloPageRoutingModule,
    PersonalModule,
    ModalModule
  ],
  // providers: [Vibration,NativeAudio],
  providers: [Vibration],
  declarations: [HelloPage]
})
export class HelloPageModule {}
