import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupPage } from './group.page';

const routes: Routes = [
  {
    path: '',
    component: GroupPage
  },
  {
    path: 'edit-lights',
    loadChildren: () => import('./pages/edit-lights/edit-lights.module').then( m => m.EditLightsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupPageRoutingModule {}
