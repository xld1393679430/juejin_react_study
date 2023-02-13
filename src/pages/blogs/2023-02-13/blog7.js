import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		const removeNullUndefined = (obj) => Object.entries(obj).reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {});

		// Or
		const removeNullUndefined = (obj) =>
			Object.entries(obj)
				.filter(([_, v]) => v != null)
				.reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
		
		// Or
		const removeNullUndefined = (obj) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
	`

	return (
		<>	
			<Alert message="从对象中删除所有 null 和 undefined 属性" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index