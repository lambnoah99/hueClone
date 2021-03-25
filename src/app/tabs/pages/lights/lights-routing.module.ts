import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightsPage } from './lights.page';

const routes: Routes = [
  {
    path: '',
    component: LightsPage
  },
  {
    path: 'light',
    loadChildren: () => import('./pages/light/light.module').then( m => m.LightPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightsPageRoutingModule {}
