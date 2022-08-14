import React from 'react';
import { Divider, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  username: string;
  rp: number;
  introduction: string;
  tags: string[];
  rank: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: '排名',
    dataIndex: 'rank',
    key: 'rank',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
    render: (text) => <a href="/">{text}</a>,
  },
  {
    title: 'Tag',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'RP',
    dataIndex: 'rp',
    key: 'rp',
  },
  {
    title: '个人简介',
    dataIndex: 'introduction',
    key: 'introduction',
  },
];

const data: DataType[] = [
  {
    key: '1',
    username: 'John Brown',
    rp: 32,
    introduction: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    rank: 1,
  },
  {
    key: '2',
    username: 'Jim Green',
    rp: 42,
    introduction: 'London No. 1 Lake Park',
    tags: ['loser'],
    rank: 2,
  },
  {
    key: '3',
    username: 'Joe Black',
    rp: 32,
    introduction: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    rank: 3,
  },
];

const Ranking: React.FC = () => (
  <>
    <Divider orientation="left" orientationMargin="0">
      排名
    </Divider>
    <Table columns={columns} dataSource={data} pagination={{ position: [] }} />
  </>
);

export default Ranking;
