import { ReactElement } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

import style from './LoginSocialButton.module.sass';

import { IconGif } from 'components';

export const LoginSocialButton = (): ReactElement => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      style={{ width: '3rem', height: '3rem' }}
      className={style.button}
      type="primary"
      icon={<IconGif />}
      onClick={loginWithRedirect}
    />
  );
};
