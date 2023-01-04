import { AppRootStore } from 'store';
import { DataTableAdminType } from 'types';

export const selectorDataAdminTable = (state: AppRootStore): DataTableAdminType[] =>
  state.accountAdminTable.dataTable;
