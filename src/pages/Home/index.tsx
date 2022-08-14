import React from 'react';
import { Layout } from 'antd';
import Counter from '../../components/partials/Home/Counter';
import Quote from '../../components/shareds/Quote';
import Competition from '../../components/Competition';
import Ranking from '../../components/Ranking';
import DiscussHome from '../../components/Discuss/DiscussHome';
import DiscussSider from '../../components/Discuss/DiscussSider';
import Recommend from '../../components/Recommend';
import SearchCard from '../../components/Search/SearchCard';
import Excerpt from '../../components/Excerpt/Excerpt';

const { Content, Sider } = Layout;

const Home: React.FC = () => (
  <div className="Home">
    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Competition />
        <Ranking />
        <DiscussHome />
        <Counter />
        <Quote />
      </Content>
      <Sider className="site-layout-background" width={400}>
        <Excerpt />
        <SearchCard />
        <DiscussSider />
        <Recommend />
      </Sider>
    </Layout>
  </div>
);

export default Home;
