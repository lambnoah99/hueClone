import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBridgePage } from './add-bridge.page';

const routes: Routes = [
  {
    path: '',
    component: AddBridgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBridgePageRoutingModule {}
