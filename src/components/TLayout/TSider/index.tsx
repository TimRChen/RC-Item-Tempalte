import * as React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '@/router'
import { useState } from 'react'
import { Layout, Menu } from 'antd'
const { Sider } = Layout
const { SubMenu } = Menu

const TSider = (): JSX.Element => {
  const defaultSelectedKeys = ['Home']

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = (collapsed: React.SetStateAction<boolean>) =>
    setCollapsed(collapsed)

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={defaultSelectedKeys}
      >
        {routes.map((route) => {
          return !route.children ? (
            <Menu.Item key={route.name} icon={<route.icon />}>
              <Link to={route.path}>{route.name}</Link>
            </Menu.Item>
          ) : (
            <SubMenu key={route.name} icon={<route.icon />} title="demo-list">
              {route.children.map((childRoute) => (
                <Menu.Item key={childRoute.name}>
                  <Link to={`${route.path}${childRoute.path}`}>
                    {childRoute.name}
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          )
        })}
      </Menu>
    </Sider>
  )
}

export default TSider
