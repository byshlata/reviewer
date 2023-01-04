import React, { ReactElement } from 'react';

import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';

import mainStyle from '../styles/container.module.sass';

import style from './App.module.sass';

import { Footer, HeaderContainer, SearchContainer } from 'components';
import { Routers } from 'pages';
import { selectorTheme, useAuthQuery } from 'store';

export const App = (): ReactElement => {
  const theme = useSelector(selectorTheme);
  useAuthQuery({});

  return (
    <ConfigProvider theme={theme}>
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
