import { emsUiReducer, featureKey, EmsUiState } from './ems.reducer';
import { ActionReducer, MetaReducer, createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { Employee } from 'src/app/model/employee.model';

export const reducers = {
  emsUiReducer: emsUiReducer
};

/**
 * Meta reducer that maps store to localStorage
 *
 * @param reducer - reducer to map
 */
export function localStorageSyncReducer<T>(reducer: ActionReducer<T>): ActionReducer<T> {
  return localStorageSync({
    keys: [
      featureKey
    ],
    rehydrate: true,
    removeOnUndefined: true
  })(reducer);
}

export const metaReducers: MetaReducer<any, any>[] = [localStorageSyncReducer];

export const selectEmsUi = createFeatureSelector<EmsUiState>(featureKey);

export const getEmployees: MemoizedSelector<object, Employee[]> = createSelector(
  selectEmsUi,
  state => state.employees
);

export const getEmployeeCount: MemoizedSelector<object, number> = createSelector(
  selectEmsUi,
  state => state.employeeCount
);