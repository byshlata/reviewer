import React from 'react';

import { Button, Card, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './Register.module.sass';

import { Path } from 'enums';
import { useAppDispatch } from 'hooks';
import { selectorIsProgress, useRegisterMutation } from 'store';
import { RegistrationType } from 'types';

export const Register = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectorIsProgress);
  const { t } = useTranslation();
  const [createAccount] = useRegisterMutation({});

  const onFinish = ({ email, password, login }: RegistrationType): void => {
    if (email && password && login) {
      dispatch(createAccount({ email, password, login }));
    }
  };

  const onLogin = (): void => {
    navigate(`${Path.Login}`);
  };

  return (
    <div className={style.container}>
      <Card title={t('createAccount')} bordered={false} style={{ width: 280 }}>
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label={t('login')}
            name="login"
            rules={[
              {
                required: true,
                type: 'string',
                message: `${t('errorLoginForm')}`,
              },
            ]}
          >
            <Input disabled={isLoading} />
          </Form.Item>

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
            <Input disabled={isLoading} />
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
            <Input.Password disabled={isLoading} />
          </Form.Item>

          <Form.Item style={{ width: '100%', margin: '0' }}>
            <div className={style.buttonWrapper}>
              <Button type="primary" onClick={onLogin} disabled={isLoading}>
                {t('singIn')}
              </Button>
              <Button type="primary" htmlType="submit" disabled={isLoading}>
                {t('createAccount')}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
