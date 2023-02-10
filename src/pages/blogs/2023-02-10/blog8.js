import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		/* 之后 */
		const insertAfter = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);
		// Or
		const insertAfter = (ele, anotherEle) => anotherEle.insertAdjacentElement('afterend', ele);
		
		/* 之前 */
		const insertBefore = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle);
		// Or
		const insertBefore = (ele, anotherEle) => anotherEle.insertAdjacentElement('beforebegin', ele);
	`

	return (
		<>
			<Alert message="在另一个元素之后/前插入一个元素" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} showRun={false}/>
		</>
	)
}

export default Index