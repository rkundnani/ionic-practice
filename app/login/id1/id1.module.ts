import { Id1Component } from './id1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';






@NgModule({
  declarations: [Id1Component],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[Id1Component]
  
})
export class Id1Module { }
