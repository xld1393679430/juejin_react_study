import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		const stripHtml = (html) => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';

		// test
		alert(stripHtml('<div class="ant-alert-message">检测 Internet Explorer 浏览器</div>'))
	`

	return (
		<>
			<Alert message="从给定文本中剥离 HTML从给定文本中剥离 HTML" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index