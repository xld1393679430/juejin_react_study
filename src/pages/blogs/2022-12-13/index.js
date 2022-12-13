import React, { useState, useEffect } from 'react'
import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code1 = `
		const isEqual = (a, b) => {
			const strA = JSON.stringify([...new Set(a)].sort())
			const strB = JSON.stringify([...new Set(b)].sort())

			console.log(strA, strB)
			return strA === strB
		}

		console.log(isEqual([1, 2, 3], [1, '2', 3])); // false	
	`

	return (
		<div>
			<div>
				<Alert message="比较两个数组而不考虑顺序" type="success"></Alert>
				<Code tab={true}>{code1}</Code>
			</div>
		</div>
	)
}

export default Index