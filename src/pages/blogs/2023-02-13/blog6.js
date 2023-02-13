import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

		// test
		alert(isDarkMode)
	`

	return (
		<>
			<Alert message="检测暗模式" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} showRun={false} />
		</>
	)
}

export default Index