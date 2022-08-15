import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { getCaptcha } from '../../service/api/users';

interface Props {
  phone: string;
}

let timeChange: number;

const CaptchaButton: React.FC<Props> = ({ phone }) => {
  const [time, setTime] = useState(60);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnContent, setBtnContent] = useState('获取验证码');

  const handleReset = () => {
    setBtnDisabled(true);
    timeChange = window.setInterval(() => setTime((t) => t - 1), 1000);
    getCaptcha(phone).then((res) => {
      console.log('res: ', res);
    });
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
