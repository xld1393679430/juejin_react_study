import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const randomColor1 = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
	const randomColor2 = () => `#${(~~(Math.random() * (1 << 24))).toString(16)}`;


	const code = `
		const randomColor1 = ${randomColor1}

		// Or
		const randomColor2 = ${randomColor2}

		// test
		alert(randomColor1())
	`

	return (
		<>
			<Alert message="生成随机的十六进制颜色" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false}/>
		</>
	)
}

export default Index