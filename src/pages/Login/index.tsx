import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, InputNumber, Button, Tabs, Row, Col } from 'antd';
import CaptchaButton from '../../components/Button/CaptchaButton';
import { login } from '../../service/api/users';
import './login.scss';

interface FormValue {
  phone: number;
  captcha: number;
  key: string;
}

const Login: React.FC = () => {
  const [keyword, setKeyWord] = useState('password');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const onFinish = (values: FormValue) => {
    const data: FormValue = values;
    data.key = keyword;
    login(values).then((res) => {
      if (res) {
        localStorage.token = res.data;
        navigate('/');
      }
    });
  };

  const getPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const { TabPane } = Tabs;
  const callback = (key: string) => {
    setKeyWord(key);
  };
  return (
    <div className="login">
      <div className="heard">
        <h1 className="title">登录</h1>
      </div>
      <div className="login_card">
        <Tabs
          type="card"
          defaultActiveKey="1"
          onChange={callback}
          centered
          style={{ margin: '0 auto' }}
        >
          <TabPane tab="账户密码登录" key="password">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: '请输入手机号!',
                  },
                  {
                    pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
                    message: '请输入正确的手机号',
                  },
                ]}
                style={{ borderBottom: '1px solid #DCDCDC' }}
              >
                <Input placeholder="请输入手机号" bordered={false} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
                style={{ borderBottom: '1px solid #DCDCDC' }}
              >
                <Input
                  bordered={false}
                  type="password"
                  autoComplete="off"
                  placeholder="请输入密码"
                />
              </Form.Item>

              <Form.Item>
                <a style={{ color: '#8C8D9B' }} href="/Regist">
                  创建账号
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{ height: '56PX', borderRadius: '12PX' }}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </TabPane>

          <TabPane tab="验证码登录" key="captcha">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: '请输入手机号!',
                  },
                  {
                    pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
                    message: '请输入正确的手机号',
                  },
                ]}
                style={{ borderBottom: '1px solid #DCDCDC' }}
              >
                <Input placeholder="请输入手机号" onChange={getPhone} bordered={false} />
              </Form.Item>
              <Form.Item
                name="captcha"
                rules={[{ required: true, message: '请输入验证码!' }]}
                style={{ borderBottom: '1px solid #DCDCDC' }}
              >
                <Row>
                  <Col span={18}>
                    <InputNumber
                      style={{ width: '100%' }}
                      bordered={false}
                      maxLength={6}
                      placeholder="请输入验证码"
                    />
                  </Col>
                  <Col span={6} style={{ float: 'right' }}>
                    <CaptchaButton phone={phone} type="login" />
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item>
                <a style={{ color: '#8C8D9B' }} href="/Regist">
                  创建账号
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{ height: '56PX', borderRadius: '12PX' }}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
