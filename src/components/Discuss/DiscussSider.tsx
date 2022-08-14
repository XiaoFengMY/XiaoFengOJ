import React from 'react';
import { Card, Tag } from 'antd';

const DiscussSider: React.FC = () => (
  <Card title="讨论节点" bordered={false} style={{ width: 300 }}>
    <h5>算法</h5>
    <Tag style={{ margin: '2px' }} color="magenta">
      <a href="/">贪心</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="red">
      <a href="/">动态规划</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="volcano">
      <a href="/">博弈论</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="orange">
      <a href="/">几何</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="gold">
      <a href="/">图论</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="gold">
      <a href="/">并查集</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="gold">
      <a href="/">排序</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="gold">
      <a href="/">搜索</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="gold">
      <a href="/">数论</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="gold">
      <a href="/">网络流</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="gold">
      <a href="/">背包</a>
    </Tag>
    <h5>数据结构</h5>
    <Tag style={{ margin: '2px' }} color="lime">
      <a href="/">图</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="green">
      <a href="/">堆</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="cyan">
      <a href="/">搜索树</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="blue">
      <a href="/">散列表</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="geekblue">
      <a href="/">栈</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="purple">
      <a href="/">队列</a>
    </Tag>
  </Card>
);

export default DiscussSider;
