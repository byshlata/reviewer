import React from 'react';

import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Path } from 'enums';
import { DataTableUserType } from 'types';
import { formattedDate } from 'utils';

type useColumnsUserTableType = {
  pathNavigateOpen: string;
  pathNavigateEdit: string;
};

export const useColumnsUserTable = ({
  pathNavigateEdit,
  pathNavigateOpen,
}: useColumnsUserTableType): {
  columns: ColumnsType<DataTableUserType>;
} => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenReview = (key: React.Key): void => {
    navigate(`${pathNavigateOpen}${Path.Root}${key.toString()}`);
  };

  const onEditReview = (key: React.Key): void => {
    navigate(`${pathNavigateEdit}${Path.Root}${key.toString()}`);
  };

  const columns: ColumnsType<DataTableUserType> = [
    {
      title: `${t('titleMain')}`,
      dataIndex: 'titleMain',
      sorter: (a, b) => a.titleMain.localeCompare(b.titleMain),
      render: (text, record: { key: React.Key }) => (
        <Button
          type="link"
          style={{ textDecoration: 'underline' }}
          onClick={() => onOpenReview(record.key)}
        >
          {text}
        </Button>
      ),
    },
    {
      title: `${t('authorAssessment')}`,
      dataIndex: 'authorAssessment',
      sorter: (a, b) => a.authorAssessment - b.authorAssessment,
    },
    {
      title: `${t('ratingStar')}`,
      dataIndex: 'ratingStar',
      sorter: (a, b) => a.ratingStar - b.ratingStar,
    },
    {
      title: `${t('ratingLike')}`,
      dataIndex: 'ratingLike',
      sorter: (a, b) => a.ratingLike - b.ratingLike,
    },
    {
      title: `${t('dataCreate')}`,
      dataIndex: 'dataCreate',
      // @ts-ignore
      sorter: (a, b) => new Date(a.dataCreate) - new Date(b.dataCreate),
      render: text => formattedDate(text),
    },
    {
      title: `${t('edit')}`,
      dataIndex: 'edit',
      render: (text, record: { key: React.Key }) => (
        <Button type="primary" onClick={() => onEditReview(record.key)}>
          {t('edit')}
        </Button>
      ),
    },
  ];

  return { columns };
};
