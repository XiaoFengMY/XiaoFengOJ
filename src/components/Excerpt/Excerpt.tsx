import { Card } from 'antd';
import React from 'react';

const Excerpt: React.FC = () => (
  <Card title="一只特立独行的猪" bordered={false} style={{ width: 300 }}>
    <p>人生在世，就如一本打开的书，我们更希望这本书的主题始终如一，不希望它在中途改变题目！</p>
  </Card>
);

export default Excerpt;
