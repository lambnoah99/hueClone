import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLightsPage } from './edit-lights.page';

const routes: Routes = [
  {
    path: '',
    component: EditLightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLightsPageRoutingModule {}
