import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Id2Page } from './id2.page';

const routes: Routes = [
  {
    path: '',
    component: Id2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule],
})
export class Id2PageRoutingModule {}
