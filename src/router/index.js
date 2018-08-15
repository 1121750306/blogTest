import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AdminIndex from '@/views/adminIndex'
import Page from '@/views/pages'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Page',
			component: Page,
			children: [{
				path: '/',
				name: 'Home',
				component: HelloWorld
			}]
		},
		{
			path: '/adminIndex',
			name: 'AdminIndex',
			component: AdminIndex
		}
	]
})
