import { Employee } from 'src/app/model/employee.model';
import { EmsUiAction, EmsUiActions } from '../actions/ems.action';

export const featureKey = 'emsUi';

export interface EmsUiState {
  employeeCount: number;
  employees: Employee[];
}

export const initialState: EmsUiState = {
  employeeCount: 0,
  employees: []
};

export function emsUiReducer(state = initialState, action: EmsUiActions): EmsUiState {
  switch (action.type) {
    case EmsUiAction.SaveEmployees:
      return {
        ...state,
        employees: action.payload,
        employeeCount: action.payload.length
      };
    case EmsUiAction.AddEmployee:
      return {
        ...state,
        employees: this.employees.push(action.payload),
        employeeCount: this.employeeCount + 1
      };
    case EmsUiAction.UpdateEmployeeCount:
      return {
        ...state,
        employeeCount: this.employeeCount + 1
      };
    default:
      return state;
  }
}
