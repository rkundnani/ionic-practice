



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { Id2PageModule } from './id2/id2.module';
import { Id1Module } from './id1/id1.module';








@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    Id2PageModule,
    Id1Module
    
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
