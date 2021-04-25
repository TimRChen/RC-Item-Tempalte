import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from '@/router'
import { Layout } from 'antd'
const { Content } = Layout

const TContent = (): JSX.Element => {
  return (
    <Content style={{ margin: '16px' }}>
      <Switch>
        {routes.map((route) => {
          if (!route.children) {
            return (
              <Route
                key={route.name}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            )
          } else {
            return (
              <Switch key={route.name}>
                {route.children.map((childRoute) => (
                  <Route
                    key={childRoute.name}
                    path={`${route.path}${childRoute.path}`}
                    exact={childRoute.exact}
                    children={<childRoute.main />}
                  />
                ))}
              </Switch>
            )
          }
        })}
      </Switch>
    </Content>
  )
}

export default TContent
