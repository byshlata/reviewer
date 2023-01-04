import { AppRootStore } from 'store';
import { DataTableUserType } from 'types';

export const selectorDataUserTable = (state: AppRootStore): DataTableUserType[] =>
  state.accountUserTable.dataTable;
