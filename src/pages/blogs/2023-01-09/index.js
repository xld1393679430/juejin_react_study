import { useState } from 'react'
import { Radio, Divider, Alert } from 'antd';
import Blog1 from './blog1'
import Blog2 from './blog2'
import Blog3 from './blog3'

const Blogs = [Blog1, Blog2, Blog3]

const Index = () => {
	const [value, setValue] = useState(3)

	const onChange = (event) => {
		setValue(event.target.value)
	}

	return (
		<div style={{ height: 1000 }}>
			<Alert message="阻止页面刷新并通知用户的类和函数两种实现方式" type="success" />
			<Radio.Group onChange={onChange} value={value}>
				{
					Blogs.map((_, index) => (
						<Radio key={index} value={index + 1}>{`Blog${index + 1}`}</Radio>
					))
				}
			</Radio.Group>

			<Divider />
			{
				Blogs.map((Blog, index) => {
					if (index + 1 === value) {
						return <Blog key={index + 1} />
					}
					return null
				})
			}
		</div>
	)
}

export default Index