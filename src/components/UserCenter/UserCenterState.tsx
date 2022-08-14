import React from 'react';
import { Avatar, Image, Space } from 'antd';

import useravatar from '../../assets/images/avater.jpg';

const UserCenterState: React.FC = () => (
  <Space style={{ position: 'absolute', top: 0, right: '10%' }}>
    <Avatar src={<Image src={useravatar} style={{ width: 32 }} />} />
    <span>登录</span>
  </Space>
);

export default UserCenterState;
