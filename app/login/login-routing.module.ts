import { Id1Component } from './../login/id1/id1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { Id2Page } from './id2/id2.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },

  
  {
    path: ':id',
    component: Id2Page
  },

  {
    path: 'login1/:id',
    component: Id1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
