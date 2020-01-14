import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { EmsUiState } from '../state/reducers/ems.reducer';
import { AddEmployeeAction, SaveEmployeesAction } from '../state/actions/ems.action';
import { Employee } from '../model/employee.model';
import { getEmployees, getEmployeeCount } from '../state/reducers';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  profileForm: FormGroup;

  employeeList: Employee[];

  employeeCount: number;

  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder,
    private store$: Store<EmsUiState>) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      department: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zipcode: ['']
      }),
    });
    this.store$.pipe(select(getEmployeeCount)).subscribe(val => {
      this.employeeCount = val;
    })
  }

  onAddEmployee() {
    this.store$.pipe(select(getEmployees)).subscribe(val => {
      this.employeeList = val;
    });
    this.employeeList.push(this.profileForm.value);
    this.store$.dispatch(new SaveEmployeesAction(this.employeeList));
    this.profileForm.reset();
  }

}
