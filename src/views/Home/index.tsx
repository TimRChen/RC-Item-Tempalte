import * as React from 'react'
import './index.less'
import { Breadcrumb } from 'antd'

const Home = (): JSX.Element => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        home page.
      </div>
    </div>
  )
}

export default Home
