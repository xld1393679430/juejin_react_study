import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {

	const code = `
		const unescape = (str) =>
		str
			.replace(/&amp;/g, '&')
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&#0*39;/g, "'")
			.replace(/&quot;/g, '"');
	`

	return (
		<>
			<Alert message="取消转义 HTML 特殊字符" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index