import React, { ReactElement, useState } from 'react';

import { Button, Table } from 'antd';
import { useTranslation } from 'react-i18next';

import style from './TableUser.module.sass';
import { TableUserType } from './types/TableUserType';

import { Path } from 'enums';
import { useColumnsUserTable } from 'hooks';
import { useDeleteReviewsMutation } from 'store';
import { createDataDeleteById } from 'utils';

export const TableUser = ({ data }: TableUserType): ReactElement => {
  const { t } = useTranslation();
  const { columns } = useColumnsUserTable({
    pathNavigateEdit: `${Path.Account}${Path.Edit}`,
    pathNavigateOpen: `${Path.Review}`,
  });

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [deleteReviews] = useDeleteReviewsMutation();

  const onSelectChange = (newSelectedRowKeys: React.Key[]): void => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const onDeleteReview = (): void => {
    const idReviews = createDataDeleteById(selectedRowKeys);
    deleteReviews(idReviews);
  };

  return (
    <>
      <div className={style.buttonWrapper}>
        <Button type="primary" onClick={onDeleteReview} disabled={!hasSelected}>
          {t('deleteReviews')}
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
