import { Alert, Button } from 'antd'
import dedent from 'dedent'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {

	const code = `
		const elementIsInFocus = (el) => (el === document.activeElement);

		elementIsInFocus(anyElement)
		// 元素处于焦点返回true，反之返回false
	`

	return (
		<>
			<Alert message="检测元素是否处于焦点" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index