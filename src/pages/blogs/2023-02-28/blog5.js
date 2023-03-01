import { Alert, Button } from 'antd'
import dedent from 'dedent'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {

	const code = `
		// Clipboard API 它的所有操作都是异步的，返回 Promise 对象，不会造成页面卡顿。而且，它可以将任意内容（比如图片）放入剪贴板。

		const copyText = async (text) => await navigator.clipboard.writeText(text)
		copyText('单行代码 前端世界')
	`

	return (
		<>
			<Alert message="文字复制到剪贴板" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index