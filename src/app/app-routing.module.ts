import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';


const routes: Routes = [{
  path: 'ems',
  component: EmployeeManagementComponent,
  children: [
    {
      path: 'add',
      component: AddEmployeeComponent
    },
    {
      path: 'display',
      component: DisplayEmployeeComponent
    }
  ]
}, {
  path: '',
  redirectTo: 'ems',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
