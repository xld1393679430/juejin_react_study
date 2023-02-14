import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"



const Index = () => {
	
	const format = (str, ...vals) => {
		return vals.reduce((s, v, i) => {
			return s.replace(new RegExp(`\\{${i}\\}`, 'g'), v)
		}, str)
	};

	const code = `
		const format = ${format}

		const template = 'My name is {0} and I am {1} years old';

		// test
		const result = format(template, 'John', 30);
		alert(result)
	`

	return (
		<>
			<Alert message="格式化字符串" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index