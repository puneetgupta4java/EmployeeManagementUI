import { Action } from '@ngrx/store';
import { Employee } from 'src/app/model/employee.model';

/**
 * Enum for EmsUiAction
 */
export enum EmsUiAction {
  AddEmployee = '[ems-ui] Add new employee',
  AddEmployeeSuccess = '[ems-ui] Add new employee success',
  AddEmployeeFailure = '[ems-ui] Add new employee failure',
  UpdateEmployeeCount = '[ems-ui] update employees count',
  SaveEmployees = '[ems-ui] Save employees'
}

export class AddEmployeeAction implements Action {
  readonly type = EmsUiAction.AddEmployee;
  constructor(public payload: Employee) { }
}

export class AddEmployeeSuccessAction implements Action {
  readonly type = EmsUiAction.AddEmployeeSuccess;
}

export class AddEmployeeFailureAction implements Action {
  readonly type = EmsUiAction.AddEmployeeFailure;
}

export class UpdateEmployeeCountAction implements Action {
  readonly type = EmsUiAction.UpdateEmployeeCount;
}

export class SaveEmployeesAction implements Action{
  readonly type = EmsUiAction.SaveEmployees;
  constructor(public payload: Employee[]) { }
}

export type EmsUiActions =
  | AddEmployeeAction
  | AddEmployeeSuccessAction
  | AddEmployeeFailureAction
  | UpdateEmployeeCountAction
  | SaveEmployeesAction;
