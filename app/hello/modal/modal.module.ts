import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modalController } from '@ionic/core';
import { ModalComponent } from './modal.component';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ModalComponent]
})
export class ModalModule { }
