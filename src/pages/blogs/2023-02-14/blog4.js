import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const truncate = (str, max, suffix) => (str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`);


	const code = `
		const truncate = ${truncate}

		// test
		alert(truncate('This is a long message', 20, '...')); // 'This is a long...'
	`

	return (
		<>
			<Alert message="在完整单词处截断字符串" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index