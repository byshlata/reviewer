import React from 'react';

import { Button, Card, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './Login.module.sass';

import { AuthSocialButton } from 'components';
import { Path } from 'enums';
import { selectorIsProgress, useLoginMutation } from 'store';
import { LoginType } from 'types';

export const Login = (): React.ReactElement => {
  const navigate = useNavigate();
  const isLoadingApp = useSelector(selectorIsProgress);
  const { t } = useTranslation();
  const [loginAccount] = useLoginMutation();

  const onFinish = ({ email, password }: LoginType): void => {
    if (email && password) {
      loginAccount({ email, password });
    }
  };

  const onRegister = (): void => {
    navigate(`${Path.Register}`);
  };

  return (
    <div className={style.container}>
      <Card
        hoverable
        style={{ width: 280 }}
        title={t('singIn')}
        extra={<AuthSocialButton />}
        bordered={false}
      >
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label={t('email')}
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: `${t('errorEmileForm')}`,
              },
            ]}
          >
            <Input disabled={isLoadingApp} />
          </Form.Item>

          <Form.Item
            label={t('password')}
            name="password"
            rules={[
              {
                required: true,
                message: `${t('errorPasswordForm')}`,
              },
            ]}
          >
            <Input.Password disabled={isLoadingApp} />
          </Form.Item>

          <Form.Item style={{ width: '100%', height: '100%', margin: '0' }}>
            <div className={style.buttonWrapper}>
              <Button type="primary" onClick={onRegister} disabled={isLoadingApp}>
                {t('singUp')}
              </Button>
              <Button type="primary" htmlType="submit" disabled={isLoadingApp}>
                {t('singIn')}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
