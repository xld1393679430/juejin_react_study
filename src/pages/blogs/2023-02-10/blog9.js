import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		/* 之后 */
		const insertHtmlAfter = (html, ele) => ele.insertAdjacentHTML('afterend', html);

		/* 之前 */
		const insertHtmlBefore = (html, ele) => ele.insertAdjacentHTML('beforebegin', html);
	`

	return (
		<>
			<Alert message="在元素后/前插入给定的 HTML" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} showRun={false} />
		</>
	)
}

export default Index