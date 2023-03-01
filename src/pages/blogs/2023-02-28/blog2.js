import { Alert, Button } from 'antd'
import dedent from 'dedent'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {

	const code = `
		const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

		isEmpty({}) // true
		isEmpty({a:"not empty"}) //false
	`

	return (
		<>
			<Alert message="检查对象是否为空" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index