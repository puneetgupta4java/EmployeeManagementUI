import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { EmsUiState } from '../state/reducers/ems.reducer';
import { Employee } from '../model/employee.model';
import { getEmployees } from '../state/reducers';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {

  employeesList: Employee[];

  constructor(private store$: Store<EmsUiState>) { }

  ngOnInit() {
    this.store$.pipe(select(getEmployees)).subscribe(val => {
      this.employeesList = val;
    })
  }

  clearData(){
    this.employeesList = [];
  }

}
