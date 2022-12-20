

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Id2PageRoutingModule } from './id2-routing.module';
import { Id2Page } from './id2.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Id2PageRoutingModule,
    FormsModule
    
  ],
  declarations: [Id2Page]
})
export class Id2PageModule {}
