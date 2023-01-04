import { ReactElement } from 'react';

import { LoginOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

export const LoginSocialButton = (): ReactElement => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button icon={<LoginOutlined />} onClick={loginWithRedirect}>
      Log In
    </Button>
  );
};
