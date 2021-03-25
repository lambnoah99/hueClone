import { GuardianGuard } from './services/Guardian/guardian.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add-bridge',
    loadChildren: () => import('./pages/add-bridge/add-bridge.module').then( m => m.AddBridgePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [GuardianGuard]
  },
  {
    path: '',
    redirectTo: 'add-bridge',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
