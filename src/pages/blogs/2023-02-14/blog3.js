import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		const bytes = (str) => new Blob([str]).size;

		// test
		alert(bytes('hello world')); // 11
		alert(bytes('🎉')); // 4
		alert(bytes('你')); // 3
	`

	return (
		<>
			<Alert message="获取字符串的字节长度" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index