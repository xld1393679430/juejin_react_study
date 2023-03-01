import { Alert, Button } from 'antd'
import dedent from 'dedent'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {

	const code = `
		const uniqueArr = (arr) => [...new Set(arr)];

		console.log(uniqueArr(["前端","js","html","js","css","html"]));
		// ['前端', 'js', 'html', 'css']
	`

	return (
		<>
			<Alert message="数组去重" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index