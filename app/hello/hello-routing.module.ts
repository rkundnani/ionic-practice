
import { PersonalComponent } from './personal/personal.component';
import { Id1Component } from './../login/id1/id1.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloPage } from './hello.page';
import { ModalComponent } from './modal/modal.component';


const routes: Routes = [
  {
    path: '',
    component: HelloPage
  },
  {
    path: ':id',
    component: PersonalComponent
  },
  {
    path: ':id',
    component: ModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelloPageRoutingModule {}
