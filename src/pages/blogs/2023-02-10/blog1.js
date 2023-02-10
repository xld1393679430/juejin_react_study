import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		const hasFocus = (ele) => ele === document.activeElement;

		// test
		alert(hasFocus(document.body))
	`

	return (
		<>
			<Alert message="检查元素是否获得焦点" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />

		</>
	)
}

export default Index