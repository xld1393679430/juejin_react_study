import { Alert, Button } from 'antd'
import dedent from 'dedent'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {

	const code = `到这个网站查看报错：https://ld-xu.sentry.io/issues/?referrer=sidebar`

	return (
		<>
			<Alert message="sentry" type="success" />
			<Code tab>{code}</Code>
			{/* <Editor jsContent={code} showIframe={false} /> */}
			<Button onClick={() => aa()}>click me</Button>
		</>
	)
}

export default Index