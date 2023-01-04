import { ReactElement } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { LoginSocialButton } from './loginSocialButton/LoginSocialButton';

export const AuthSocialButton = (): ReactElement => {
  const { isAuthenticated } = useAuth0();

  return <div>{!isAuthenticated && <LoginSocialButton />}</div>;
};
