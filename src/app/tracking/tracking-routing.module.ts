import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrackingViewComponent} from './tracking-view/tracking-view.component';

const trackingRoutes: Routes = [
  {
    path: 'tracking',
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
