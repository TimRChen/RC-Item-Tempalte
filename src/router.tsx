/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Home from '@/views/Home'
import DemoPage from '@/views/Demo'

export type RouteItem = {
  path: string
  name: string
  children?: RouteItem[]
  icon?: JSX.Element | any
  main?: JSX.Element | any
  exact?: boolean
}

export const routes: RouteItem[] = [
  {
    path: '/',
    name: 'Home',
    icon: PieChartOutlined,
    main: Home,
    exact: true,
  },
  {
    path: '/demo1',
    name: 'Demo1',
    icon: DesktopOutlined,
    main: DemoPage,
  },
  {
    path: '/demo-list',
    name: 'DemoList',
    icon: UserOutlined,
    children: [
      {
        path: '/one',
        name: 'One',
        main: () => <div>sb</div>,
      },
    ],
  },
]
