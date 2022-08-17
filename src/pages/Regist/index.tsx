import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, InputNumber, Button, Checkbox, Row, Col, message } from 'antd';
import { regist } from '../../service/api/users';
import './regist.scss';
import CaptchaButton from '../../components/Button/CaptchaButton';

interface FormValue {
  phone: number;
  captcha: number;
  password: string;
  passwordConfirmation: string;
  remember: boolean;
}

const Register: React.FC = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const getPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const onFinish = (values: FormValue) => {
    regist(values).then((res) => {
      if (res) {
        message.success('注册成功');
        navigate('/');
      }
    });
  };

  return (
    <div className="bg">
      <div className="heard">
        <h1 className="title">注册</h1>
      </div>
      <div className="login_card">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: false }}
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
            <Input onChange={getPhone} type="number" placeholder="请输入手机号" bordered={false} />
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
              {
                len: 6,
                message: '请输入6位验证码',
              },
            ]}
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
                <CaptchaButton phone={phone} />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ type: 'string', required: true, message: '请设置密码!' }]}
            style={{ borderBottom: '1px solid #DCDCDC' }}
          >
            <Input.Password
              bordered={false}
              type="password"
              placeholder="请设置密码"
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item
            name="passwordConfirmation"
            rules={[{ type: 'string', required: true, message: '请重复密码!' }]}
            style={{ borderBottom: '1px solid #DCDCDC' }}
          >
            <Input.Password
              bordered={false}
              type="password"
              placeholder="请重复密码"
              autoComplete="off"
            />
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
};

export default Register;
