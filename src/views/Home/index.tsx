import React from 'react';
import { Layout } from 'antd';
import { TSider, THeader, TContent } from '../../components'
import './index.less'

const Home = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TSider />
      <Layout className="site-layout">
        <THeader />
        <TContent />
      </Layout>
    </Layout>
  );
}

export default Home;