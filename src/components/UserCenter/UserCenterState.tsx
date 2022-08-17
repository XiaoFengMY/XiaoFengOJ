import React, { useState, useEffect } from 'react';
import { Avatar, Image, Space } from 'antd';
import { Link } from 'react-router-dom';

import useravatar from '../../assets/images/avater.jpg';
import { loginState } from '../../service/api/users';

const UserCenterState: React.FC = () => {
  const [username, setUsername] = useState('登录');
  // const [useravatar, setUseravatar] = useState('');

  useEffect(() => {
    if (localStorage.token) {
      loginState().then((res) => {
        if (res) {
          setUsername(res.data[0].username);
          // setUseravatar(res.data.data.useravatar);
        }
      });
    }
  }, []);

  return (
    <Space style={{ position: 'absolute', top: 0, right: '10%' }}>
      <Avatar src={<Image src={useravatar} style={{ width: 32 }} />} />
      <span>
        <Link to="/login">{username}</Link>
      </span>
    </Space>
  );
};

export default UserCenterState;
