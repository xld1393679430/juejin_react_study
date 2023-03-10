import { useState } from 'react'
import { Radio, Divider, Alert } from 'antd';
import Demo01 from './demo01'
import Demo02 from './demo02'

const Blogs = [Demo01, Demo02]

const Index = () => {
	const [value, setValue] = useState(2)

	const onChange = (event) => {
		setValue(event.target.value)
	}

	return (
		<div style={{ height: 1000 }}>
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