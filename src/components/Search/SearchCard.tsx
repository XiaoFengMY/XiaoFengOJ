import React from 'react';
import { Card, Input } from 'antd';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const SearchCard: React.FC = () => (
  <div>
    <Card title="搜索" bordered={false} style={{ width: 300 }}>
      <Search placeholder="1001" allowClear enterButton="Search" size="large" onSearch={onSearch} />
    </Card>
  </div>
);

export default SearchCard;
