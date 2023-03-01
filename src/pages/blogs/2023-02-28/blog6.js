import { Alert, Button } from 'antd'
import dedent from 'dedent'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {

	const code = `
		const getSelectedText = () => window.getSelection().toString();

		getSelectedText();
		// 返回选中的内容
	`

	return (
		<>
			<Alert message="获取选定的文本" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index