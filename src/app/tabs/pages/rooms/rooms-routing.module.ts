import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomsPage } from './rooms.page';

const routes: Routes = [
  {
    path: '',
    component: RoomsPage
  },
  {
    path: 'group/:groupId',
    loadChildren: () => import('./pages/group/group.module').then( m => m.GroupPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsPageRoutingModule {}
