import React from 'react';
import { List, Tag, Divider, Space } from 'antd';
import { UserOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../store/hooks';
import { selectCompetition } from '../../store/slices/competition.slice';

const Competition: React.FC = () => {
  const competitionList = useAppSelector(selectCompetition);
  return (
    <>
      <Divider orientation="left" orientationMargin="0">
        比赛
      </Divider>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={competitionList}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <Space key="4" style={{ margin: '12px' }}>
                <FieldTimeOutlined style={{ fontSize: '20px' }} />
                <span>{item.duration}</span>
              </Space>,
              <Space key="5" style={{ margin: '12px' }}>
                <UserOutlined style={{ fontSize: '20px' }} />
                {item.participants}
              </Space>,
            ]}
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.tags.map((tag) => (
                <Tag key={tag} style={{ margin: '2px' }} color="magenta">
                  <a href="/">{tag}</a>
                </Tag>
              ))}
            />
            <span>{item.startTime}开始</span>
          </List.Item>
        )}
      />
    </>
  );
};
export default Competition;
