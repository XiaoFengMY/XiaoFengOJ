import React from 'react';
import { Form, Input, Button, Tabs, Row, Col } from 'antd';
import './login.scss';

const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};

const { TabPane } = Tabs;
function callback(key: any) {
  console.log(key);
}
const Login: React.FC = () => (
  <div className="bg">
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
        <TabPane tab="账户密码登录" key="1">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入手机号 / 用户名!' }]}
              style={{ borderBottom: '1px solid #DCDCDC' }}
            >
              <Input placeholder="请输入手机号 / 用户名" bordered={false} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
              style={{ borderBottom: '1px solid #DCDCDC' }}
            >
              <Input bordered={false} type="password" placeholder="请输入密码" />
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

        <TabPane tab="验证码登录" key="2">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="phone"
              rules={[{ required: true, message: '请输入手机号!' }]}
              style={{ borderBottom: '1px solid #DCDCDC' }}
            >
              <Input placeholder="请输入手机号" bordered={false} />
            </Form.Item>
            <Form.Item
              name="captcha"
              rules={[{ required: true, message: '请输入验证码!' }]}
              style={{ borderBottom: '1px solid #DCDCDC' }}
            >
              <Row>
                <Col span={18}>
                  <Input bordered={false} type="password" placeholder="请输入验证码" />
                </Col>
                <Col span={6} style={{ float: 'right' }}>
                  <Button type="link" style={{ color: '#151830', fontWeight: 'bold' }}>
                    发送验证码
                  </Button>
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

export default Login;
