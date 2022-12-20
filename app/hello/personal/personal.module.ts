import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PersonalComponent } from './personal.component';



@NgModule({
  declarations: [PersonalComponent],
  imports: [
    CommonModule,
    IonicModule
    
  ],
  exports:[PersonalComponent]
})
export class PersonalModule { }
