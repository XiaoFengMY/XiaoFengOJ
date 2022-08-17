import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import { getCaptcha } from '../../service/api/users';

interface Props {
  phone: string;
  type: 'regist' | 'login';
}

let timeChange: number;

const CaptchaButton: React.FC<Props> = ({ phone, type }) => {
  const [time, setTime] = useState(60);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnContent, setBtnContent] = useState('获取验证码');

  const handleReset = () => {
    const reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    const isPhone: boolean = reg.test(phone);
    if (isPhone) {
      getCaptcha({ type, phone }).then((res) => {
        if (res) {
          setBtnDisabled(true);
          timeChange = window.setInterval(() => setTime((t) => t - 1), 1000);
        }
      });
    } else {
      message.error('请输入手机号！');
    }
  };
  useEffect(() => {
    clearInterval(timeChange);
    return () => clearInterval(timeChange);
  }, []);
  useEffect(() => {
    if (time > 0 && time < 60) {
      setBtnContent(`${time}s后重发`);
    } else {
      clearInterval(timeChange);
      setBtnDisabled(false);
      setTime(60);
      setBtnContent('获取验证码');
    }
  }, [time]);
  return (
    <Button
      onClick={handleReset}
      disabled={btnDisabled}
      type="link"
      style={{ color: '#151830', fontWeight: 'bold' }}
    >
      {btnContent}
    </Button>
  );
};

export default CaptchaButton;
