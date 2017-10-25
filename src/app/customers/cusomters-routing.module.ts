import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './customers.component';
import {AuthGuard} from '../auth/auth.guard';

const customersRoutes: Routes = [
  {
    path: 'customers',
    canActivate: [AuthGuard],
    component: CustomersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(customersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomersRoutingModule {}
