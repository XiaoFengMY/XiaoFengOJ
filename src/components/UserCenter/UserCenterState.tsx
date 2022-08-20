import React, { useState, useEffect } from 'react';
import { Popover, Avatar, Image, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import useravatar from '../../assets/images/avater.jpg';
import { loginState } from '../../service/api/users';

const UserCenterState: React.FC = () => {
  const [username, setUsername] = useState('登录');
  const [logStatus, setLogStatus] = useState(false);
  // const [useravatar, setUseravatar] = useState('');

  useEffect(() => {
    if (localStorage.token) {
      loginState().then((res) => {
        if (res) {
          setLogStatus(true);
          setUsername(res.data[0].username);
          // setUseravatar(res.data.data.useravatar);
        }
      });
    }
  }, [logStatus]);

  const logout = () => {
    setLogStatus(false);
    localStorage.removeItem('token');
  };

  const content = (
    <div style={{ textAlign: 'center' }}>
      <p>
        <Link to="/Usercenter">个人中心</Link>
      </p>
      <p>
        <Link to="/Admin">后台管理</Link>
      </p>
      <p>
        <Button type="text" onClick={logout}>
          退出登录
        </Button>
      </p>
    </div>
  );

  return (
    <Space style={{ position: 'absolute', top: 0, right: '10%' }}>
      <Avatar src={<Image src={useravatar} style={{ width: 32 }} />} />
      {logStatus ? (
        <Popover content={content}>
          <Link to="/login">{username}</Link>{' '}
        </Popover>
      ) : (
        <Link to="/login">登录/注册</Link>
      )}
    </Space>
  );
};

export default UserCenterState;
