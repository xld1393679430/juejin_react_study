import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		const touchSupported = () => {
			return !!('ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch))
		}

		// test
		alert(touchSupported())
	`

	return (
		<>
			<Alert message="检查是否支持触摸事件" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index