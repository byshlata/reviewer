import React, { ReactElement, useEffect } from 'react';

import { ConfigProvider, message } from 'antd';
import { useSelector } from 'react-redux';

import mainStyle from '../styles/container.module.sass';

import style from './App.module.sass';

import { Footer, HeaderContainer, SearchContainer } from 'components';
import { Routers } from 'pages';
import { selectorErrorMessage, selectorTheme, useAuthQuery } from 'store';

export const App = (): ReactElement => {
  const theme = useSelector(selectorTheme);
  const errorMessage = useSelector(selectorErrorMessage);
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    if (errorMessage) {
      messageApi.open({
        type: 'warning',
        content: errorMessage,
      });
    }
  }, [errorMessage]);

  useAuthQuery({});

  return (
    <ConfigProvider theme={theme}>
      {contextHolder}
      <div
        style={{ backgroundColor: theme.token.colorPrimaryBg }}
        className={style.appWrapper}
      >
        <HeaderContainer />
        <div className={mainStyle.mainContainer}>
          <div className={mainStyle.wrapper}>
            <SearchContainer />
            <Routers />
          </div>
        </div>
        <Footer />
      </div>
    </ConfigProvider>
  );
};
