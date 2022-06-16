import React,{ lazy } from 'react'

const routers = [
	{
		path: '/home',
        name: '首页',
		exact: true,
		sensitive: true,
		strict: true,
		component: lazy(() => import('../views/home')) ,
		children: [
			{
				path: '/home/A',
				name: '项目A',
				exact: true,
				sensitive: true,
				strict: true,
				component: lazy(() => import('../views/home/A')) ,
			},
			{
				path: '/home/B',
				name: '项目B',
				exact: true,
				sensitive: true,
				strict: true,
				component: lazy(() => import('../views/home/B')) ,
			},
		]
	},
    {
		path: '/about',
        name: '中间页',
		exact: true,
		sensitive: true,
		strict: true,
		component: lazy(() => import('../views/about')) ,
	},
	{
		path: '/login',
        name: '登陆页',
		exact: true,
		sensitive: true,
		strict: true,
		component: lazy(() => import('../views/login')) ,
	},
]

export default routers