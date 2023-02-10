import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		const isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

		//test
		alert(isMacBrowser)
	`

	return (
		<>
			<Alert message="检测 macOS 浏览器" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index