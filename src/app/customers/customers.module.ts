import {NgModule} from '@angular/core';
import {CustomersComponent} from './customers.component';
import {CustomersRoutingModule} from './cusomters-routing.module';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CustomersRoutingModule
  ],
  exports: []
})
export class CustomersModule {}
