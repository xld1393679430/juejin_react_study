import { Alert } from 'antd'
import Editor from './Editor'

const Index = () => {

	return (
		<>
			<Alert message="React 应用程序中产品导览的实用指南" type="success" />
			<p>Welcome to the editor!</p>
			<Editor />
		</>
	)
}

export default Index