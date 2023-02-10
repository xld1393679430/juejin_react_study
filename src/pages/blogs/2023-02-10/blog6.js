import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		 const getSelectedText = () => window.getSelection().toString();
	`

	return (
		<>
			<Alert message="获取选中的文本" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} showRun={false} />
		</>
	)
}

export default Index