import { ReactElement } from 'react';

import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

import { Path } from 'enums';

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE as string;

export const Auth0ProviderWithNavigate = ({ children }: any): ReactElement => {
  const navigate = useNavigate();
  const onRedirectCallback = (): any => {
    navigate(`${Path.Account}`);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
