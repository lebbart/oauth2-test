import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DriversComponent} from './drivers.component';
import {AuthGuard} from '../auth/auth.guard';

const driversRoutes: Routes = [
  {
    path: 'drivers',
    canActivate: [AuthGuard],
    component: DriversComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(driversRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DriversRoutingModule {}
