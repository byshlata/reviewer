import React from 'react';

import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Path } from 'enums';
import { DataTableAdminType } from 'types';

type useColumnsAdminTableType = {
  pathNavigateUserReviews: string;
};

export const useColumnsAdminTable = ({
  pathNavigateUserReviews,
}: useColumnsAdminTableType): {
  columns: ColumnsType<DataTableAdminType>;
} => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenUserReviews = (key: React.Key): void => {
    navigate(`${pathNavigateUserReviews}${Path.User}${Path.Root}${key.toString()}`);
  };

  const columns: ColumnsType<DataTableAdminType> = [
    {
      title: `${t('login')}`,
      dataIndex: 'login',
      sorter: (a, b) => a.login.localeCompare(b.login),
      render: text => text,
    },
    {
      title: `${t('rating')}`,
      dataIndex: 'rating',
      sorter: (a, b) => a.rating - b.rating,
      render: text => text,
    },
    {
      title: `${t('status')}`,
      dataIndex: 'status',
      render: text => text,
    },
    {
      title: `${t('rights')}`,
      dataIndex: 'rights',
      render: text => text,
    },
    {
      title: `${t('seeReviews')}`,
      dataIndex: 'seeReviews',
      render: (text, record: { key: React.Key }) => (
        <Button type="primary" onClick={() => onOpenUserReviews(record.key)}>
          {t('seeReviews')}
        </Button>
      ),
    },
  ];

  return { columns };
};
