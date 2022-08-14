import React from 'react';
import { Card, Tag } from 'antd';

const Recommend = () => (
  <Card title="推荐" bordered={false} style={{ width: 300, height: 500 }}>
    <h5>中文</h5>
    <Tag style={{ margin: '2px' }} color="magenta">
      <a href="/">CometOJ</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="red">
      <a href="/">LibreOJ</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="volcano">
      <a href="/">洛谷</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="orange">
      <a href="/">UOJ</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="gold">
      <a href="/">Vijos ZOJ</a>
    </Tag>
    <h5>English</h5>
    <Tag style={{ margin: '2px' }} color="lime">
      <a href="/">AtCoder</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="green">
      <a href="/">CodeChef</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="cyan">
      <a href="/">Codeforces</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="blue">
      <a href="/">SPOJ</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="geekblue">
      <a href="/">TopCoder</a>
    </Tag>
    <Tag style={{ margin: '2px' }} color="purple">
      <a href="/">OnlineJudge</a>
    </Tag>
  </Card>
);

export default Recommend;
