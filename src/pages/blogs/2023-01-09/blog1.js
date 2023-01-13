import React, { useState } from 'react'
import { useBeforeunload } from 'react-beforeunload';
import { Alert } from 'antd'

const Index = () => {
	const [value, setValue] = useState('');

	useBeforeunload((event) => {
		if (value !== '') {
			event.preventDefault();
		}
	});


	return (
		<>
			<Alert message="输入非空的情况下刷新页面会有提示（函数组件）" type="success" />
			<input onChange={(event) => setValue(event.target.value)} value={value} />
		</>
	)
}

export default Index