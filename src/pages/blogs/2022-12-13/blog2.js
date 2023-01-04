import { useEffect } from 'react'
import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const toObject = (array, key) => array.reduce((a, b) => ({ ...a, [b[key]]: b }), {})

	const code1 = `
		toObject(
			[
				{ id: '1', name: 'Alpha', gender: 'Male' },
				{ id: '2', name: 'Bravo', gender: 'Male' },
				{ id: '3', name: 'Charlie', gender: 'Female' },
			],
			'id'
		);
		/* 
		{
			'1': { id: '1', name: 'Alpha', gender: 'Male' },
			'2': { id: '2', name: 'Bravo', gender: 'Male' },
			'3': { id: '3', name: 'Charlie', gender: 'Female' },
		}
		*/

		const toObject = (array, key) => array.reduce((a, b) => ({ ...a, [b[key]]: b }), {})}
	`

	

	useEffect(() => {
		const result = toObject(
			[
				{ id: '1', name: 'Alpha', gender: 'Male' },
				{ id: '2', name: 'Bravo', gender: 'Male' },
				{ id: '3', name: 'Charlie', gender: 'Female' },
			],
			'id'
		)
		console.log(result)
	}, [])

	return (
		<div>
			<Alert message="将对象数组转换为单个对象 方法一" type="success"></Alert>
			<Code tab={true}>{code1}</Code>
		</div>
	)
}

export default Index