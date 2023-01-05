import { useEffect } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { useAuthSocialMutation } from 'store';

export const useAuthSocial = (): void => {
  const { user } = useAuth0();
  const [authSocialAccount] = useAuthSocialMutation({});
  useEffect(() => {
    if ((user?.given_name || user?.nickname) && user?.email) {
      const login = user?.given_name || user?.nickname;
      authSocialAccount({
        password: '123',
        login: login || '',
        email: user.email,
        avatar: user.picture,
      });
    }
  }, [user]);
};
