import React from 'react';
import { Form, Input, InputNumber, Button, Checkbox, Row, Col } from 'antd';
import { regist } from '../../service/api/users';
import './regist.scss';

interface FormValue {
  phone: number;
  captcha: number;
  password: string;
  passwordConfirmation: string;
  remember: boolean;
}

const onFinish = (values: FormValue) => {
  regist(values).then((res) => {
    console.log('res: ', res);
  });
};
const Register: React.FC = () => (
  <div className="bg">
    <div className="heard">
      <h1 className="title">注册</h1>
    </div>
    <div className="login_card">
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
              type: 'number',
              transform: (value: number) => Number(value),
            },
            {
              required: true,
              message: '请输入手机号!',
            },
          ]}
          style={{ borderBottom: '1px solid #DCDCDC' }}
        >
          <Input type="number" placeholder="请输入手机号" bordered={false} />
        </Form.Item>
        <Form.Item
          name="captcha"
          rules={[
            {
              type: 'number',
              transform: (value: number) => Number(value),
            },
            {
              required: true,
              message: '请输入验证码!',
            },
          ]}
          style={{ borderBottom: '1px solid #DCDCDC' }}
        >
          <Row>
            <Col span={18}>
              <InputNumber
                style={{ width: '100%' }}
                bordered={false}
                type="number"
                placeholder="请输入验证码"
              />
            </Col>
            <Col span={6} style={{ float: 'right' }}>
              <Button type="link" style={{ color: '#151830', fontWeight: 'bold' }}>
                发送验证码
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ type: 'string', required: true, message: '请设置密码!' }]}
          style={{ borderBottom: '1px solid #DCDCDC' }}
        >
          <Input bordered={false} type="password" placeholder="请设置密码" autoComplete="off" />
        </Form.Item>
        <Form.Item
          name="passwordConfirmation"
          rules={[{ type: 'string', required: true, message: '请重复密码!' }]}
          style={{ borderBottom: '1px solid #DCDCDC' }}
        >
          <Input bordered={false} type="password" placeholder="请重复密码" autoComplete="off" />
        </Form.Item>

        <Form.Item>
          已有帐号，<a href="/Login">点击登录</a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{ height: '56PX', borderRadius: '12PX' }}
          >
            注册
          </Button>
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: '请阅读用户协议!' }]}
          name="remember"
          valuePropName="checked"
          style={{ textAlign: 'left' }}
        >
          <Checkbox style={{ color: '#CCCCCC' }}>
            我已阅读并同意《<span>用户服务协议</span>》
          </Checkbox>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default Register;
