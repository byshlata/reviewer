import React, { ReactElement, useState } from 'react';

import { Button, Table } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import style from './Admin.module.sass';

import { AutoCompleteWithButton } from 'components';
import { Path, PathAPI } from 'enums';
import { useColumnsAdminTable } from 'hooks';
import {
  selectorAppSettingsCategory,
  selectorDataAdminTable,
  useAddCategoryMutation,
  useChangeMutation,
  useDeleteUsersMutation,
  useGetUsersQuery,
} from 'store';
import { createDataDeleteById } from 'utils';

export const Admin = (): ReactElement => {
  const { t } = useTranslation();
  const data = useSelector(selectorDataAdminTable);
  const category = useSelector(selectorAppSettingsCategory);
  const { columns } = useColumnsAdminTable({
    pathNavigateUserReviews: `${Path.Account}${Path.AccountAdmin}`,
  });

  useGetUsersQuery({});
  const [deleteUsers] = useDeleteUsersMutation({});
  const [changeProperty] = useChangeMutation({});
  const [addCategory] = useAddCategoryMutation({});

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]): void => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const onDeleteUser = (): void => {
    const idUsers = createDataDeleteById(selectedRowKeys);
    deleteUsers(idUsers);
  };

  const onBlockUser = (): void => {
    const idUsers = createDataDeleteById(selectedRowKeys);
    changeProperty({ ...idUsers, path: PathAPI.ChangeStatus });
  };

  const onRightsUser = (): void => {
    const idUsers = createDataDeleteById(selectedRowKeys);
    changeProperty({ ...idUsers, path: PathAPI.ChangeRights });
  };

  const onAddCategory = (value: string): void => {
    addCategory({ category: value });
  };

  return (
    <>
      <AutoCompleteWithButton
        textButton={t('addCategory')}
        callback={onAddCategory}
        options={category}
        disabled={false}
        placeholder={t('category')}
      />
      <div className={style.informationWrapper}>
        <Button
          style={{ marginRight: '0.5rem' }}
          type="primary"
          onClick={onDeleteUser}
          disabled={!hasSelected}
        >
          {t('deleteUser')}
        </Button>
        <Button
          style={{ marginRight: '0.5rem' }}
          type="primary"
          onClick={onBlockUser}
          disabled={!hasSelected}
        >
          {t('blockUser')}
        </Button>
        <Button type="primary" onClick={onRightsUser} disabled={!hasSelected}>
          {t('changeRights')}
        </Button>
      </div>
      <Table
        rowSelection={rowSelection}
        bordered
        scroll={{ x: true }}
        columns={columns}
        dataSource={data || undefined}
      />
    </>
  );
};
