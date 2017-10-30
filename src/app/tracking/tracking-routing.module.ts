import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrackingViewComponent} from './tracking-view/tracking-view.component';
import {AuthGuard} from "../auth/auth.guard";

const trackingRoutes: Routes = [
  {
    path: 'tracking',
    canActivate: [AuthGuard],
    data: {
      msg: 'this is msg',
      roles: [
        'USE_TRACKING',
        'IVIA_DRIVER'
      ]
    },
    component: TrackingViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(trackingRoutes)
  ],
  exports: [RouterModule]
})
export class TrackingRouteModule {
}
