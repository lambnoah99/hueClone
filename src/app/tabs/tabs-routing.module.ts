import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'lights',
        loadChildren: () => import('./pages/lights/lights.module').then( m => m.LightsPageModule)
      },
      {
        path: 'rooms',
        loadChildren: () => import('./pages/rooms/rooms.module').then( m => m.RoomsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: 'lights',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
