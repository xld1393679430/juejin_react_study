import { Alert, Button } from 'antd'
import dedent from 'dedent'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {

	const code = `
		// 浏览器使用选项卡式浏览，任何网页都有可能在后台,此时对用户来说是没有在浏览的, 知道怎么快速检测到，你的网页对用户是隐藏还是可见吗？

		const isTabActive = () => !document.hidden; 

		isTabActive()
		// true|false
	`

	return (
		<>
			<Alert message="检查当前选项卡是否在后台" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index