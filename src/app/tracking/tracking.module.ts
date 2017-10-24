import { NgModule } from '@angular/core';
import { TrackingRouteModule } from './tracking-routing.module';
import { TrackingViewComponent } from './tracking-view/tracking-view.component';

@NgModule({
  declarations: [
    TrackingViewComponent
  ],
  imports: [
    TrackingRouteModule
  ],
  exports: []
})
export class TrackingModule {

}
