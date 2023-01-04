import React, { ReactElement, useEffect } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './HeaderContainer.module.sass';

import { AvatarWithButton, ButtonLogo, Header, Logo, MenuApp } from 'components';
import { Language, Path, Theme } from 'enums';
import { useAppDispatch } from 'hooks';
import {
  changeLanguageApp,
  changeTheme,
  selectorIsAuth,
  selectorLanguageNow,
  selectorThemeNow,
  selectorUserAvatar,
  selectorUserRating,
  selectorUserRights,
  useLogoutMutation,
} from 'store';

export const HeaderContainer = (): ReactElement => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectorIsAuth);
  const avatar = useSelector(selectorUserAvatar);
  const ratingUser = useSelector(selectorUserRating);
  const userRights = useSelector(selectorUserRights);
  const themeNow = useSelector(selectorThemeNow);
  const language = useSelector(selectorLanguageNow);
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth0();

  const { i18n } = useTranslation();
  const [logoutAccount] = useLogoutMutation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const onChangeLanguage = (): void => {
    dispatch(changeLanguageApp());
  };

  const onChangeTheme = (): void => {
    dispatch(changeTheme());
  };

  const onLogout = (): void => {
    logoutAccount({});
    if (isAuthenticated) {
      logout();
    }
  };

  const onLogin = (): void => {
    navigate(`${Path.Login}`);
  };

  const onClickLogo = (): void => {
    navigate(`${Path.Home}`);
  };

  return (
    <Header>
      <div>
        <ButtonLogo title="Reviewer" onClick={onClickLogo}>
          <Logo width="25" />
        </ButtonLogo>
      </div>

      {isAuth && <MenuApp user={userRights} />}

      <div className={style.wrapper}>
        <AvatarWithButton
          rating={ratingUser}
          avatar={avatar}
          isAuth={!!isAuth}
          onLogout={onLogout}
          onLogin={onLogin}
        />

        <div className={style.switchContainer}>
          <Switch
            onChange={onChangeLanguage}
            size="small"
            checkedChildren="RU"
            unCheckedChildren="EN"
            checked={language === Language.English}
          />
          <Switch
            onChange={onChangeTheme}
            size="small"
            checkedChildren="☀"
            unCheckedChildren="☼"
            checked={themeNow === Theme.Light}
          />
        </div>
      </div>
    </Header>
  );
};
