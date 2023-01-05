import { ReactElement } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

import { IconGif } from 'components';

export const LoginSocialButton = (): ReactElement => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      style={{ backgroundColor: '#68ead6', width: 'auto', height: 'auto', padding: 2 }}
      type="primary"
      icon={<IconGif />}
      title="rrr"
      onClick={loginWithRedirect}
    />
  );
};
