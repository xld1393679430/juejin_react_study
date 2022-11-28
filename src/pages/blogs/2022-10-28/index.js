import React from 'react'
import { Divider } from 'antd'
import Blog1 from './blog1'
import Blog2 from './blog2'

const Index = () => {

	return (
		<div>
			<Blog1 />
			<Divider />
			<Blog2 />
		</div>
	)
}

export default Index