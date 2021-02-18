import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'antd'
import { TSider, THeader, TContent } from '@/components'
import './App.less'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Router>
          <TSider />
          <Layout className="site-layout">
            <THeader />
            <TContent />
          </Layout>
        </Router>
      </Layout>
    </div>
  )
}

export default App
