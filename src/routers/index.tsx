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
				path: '/home/atTextarea',
				name: '@发表评论组件',
				exact: true,
				sensitive: true,
				strict: true,
				component: lazy(() => import('../views/component/at-textarea')) ,
			},
			{
				path: '/home/tabs',
				name: '自定义tabs组件',
				exact: true,
				sensitive: true,
				strict: true,
				component: lazy(() => import('../views/component/tabs')) ,
			},
		]
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