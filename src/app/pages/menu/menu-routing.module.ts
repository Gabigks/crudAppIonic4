import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
        { path: 'users', loadChildren: () => import('../users/users.module').then( m => m.UsersPageModule) },
        { path: 'adduser', loadChildren: () => import('../adduser/adduser.module').then( m => m.AdduserPageModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
