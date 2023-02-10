import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		const formatYMD = date => date.toISOString().slice(0, 10)

		// test
		alert(formatYMD(new Date()))
	`

	return (
		<>
			<Alert message="将日期转换为 YYYY-MM-DD 格式" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index