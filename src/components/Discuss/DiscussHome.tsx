import React from 'react';
import { Avatar, List, Divider } from 'antd';

const data = Array.from({ length: 10 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: 'https://joeschmoe.io/api/v1/random',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const DiscussHome: React.FC = () => (
  <>
    <Divider orientation="left" orientationMargin="0">
      讨论
    </Divider>
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={(item) => (
        <List.Item key={item.title}>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  </>
);

export default DiscussHome;
