import { useState } from 'react'
import { Radio, Divider, Alert, Button } from 'antd';
import Blog1 from './blog1'
import Blog2 from './blog2'

const Blogs = [Blog1, Blog2]

const Index = () => {
	const [value, setValue] = useState(2)

	const onChange = (event) => {
		setValue(event.target.value)
	}

	return (
		<div style={{ height: 1000 }}>
			<Alert
				message="Css Framer-Motion 动画"
				type="info"
				action={
					<Button size="small" type="link" danger href="https://www.smashingmagazine.com/2020/10/introduction-to-framer-motion/">
						来源
					</Button>
				}
			/>
			<Divider />
			
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