import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		const isIE = !!document.documentMode;

		// test
		alert(isIE)
	`

	return (
		<>
			<Alert message="检测 Internet Explorer 浏览器" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index