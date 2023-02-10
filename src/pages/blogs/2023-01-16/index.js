import { useState } from 'react'
import { Radio, Divider, Alert } from 'antd';
import Blog1 from './blog1'
import Blog2 from './blog2'
import Blog3 from './blog3'
import Blog4 from './blog4'
import Blog5 from './blog5'
import Blog6 from './blog6'
import Blog7 from './blog7'
import Blog8 from './blog8'
import Blog9 from './blog9'
import Blog10 from './blog10'
import Blog11 from './blog11'
import blog12 from './blog12'
import Blog13 from './blog13'
import Blog14 from './blog14'
const Blogs = [Blog1, Blog2, Blog3, Blog4, Blog5, Blog6, Blog7, Blog8, Blog9, Blog10, Blog11, blog12, Blog13, Blog14]

const Index = () => {
	const [value, setValue] = useState(1)

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