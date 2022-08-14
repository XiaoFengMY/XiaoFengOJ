import React from 'react';
import { Divider, Table, Tag } from 'antd';
import { MinusCircleTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  title: string;
  ACTest: string;
  difficulty: string;
  tags: string[];
  state: boolean;
}

const columns: ColumnsType<DataType> = [
  {
    title: '题目',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a href="/">{text}</a>,
  },
  {
    title: '标签',
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
    title: 'AC / 尝试',
    dataIndex: 'ACTest',
    key: 'ACTest',
  },
  {
    title: '难度',
    dataIndex: 'difficulty',
    key: 'difficulty',
    render: (item) => {
      let color: string = 'green';
      if (item === '困难') {
        color = 'red';
      }
      return <Tag color={color}>{item}</Tag>;
    },
  },
  {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
    render: (item) => {
      if (item) {
        return <CheckCircleTwoTone twoToneColor="#339daf" />;
      }
      return <MinusCircleTwoTone twoToneColor="#7cb79d" />;
    },
  },
];

const data: DataType[] = [
  {
    key: '1',
    title: 'John Brown',
    ACTest: '32',
    difficulty: '简单',
    tags: ['nice', 'developer'],

    state: false,
  },
  {
    key: '2',
    title: 'Jim Green',
    ACTest: '42',
    difficulty: '困难',
    tags: ['loser'],
    state: true,
  },
  {
    key: '3',
    title: 'Joe Black',
    ACTest: '32',
    difficulty: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    state: false,
  },
];

const QuestionBank: React.FC = () => (
  <>
    <Divider orientation="left" orientationMargin="0">
      排名
    </Divider>
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ position: ['topCenter', 'bottomCenter'] }}
    />
  </>
);

export default QuestionBank;
