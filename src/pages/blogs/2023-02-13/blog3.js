import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		// 检查代码是否在浏览器中运行
		const isBrowser = typeof window === 'object' && typeof document === 'object';

		// 检查代码是否在 NodeJS 中运行
		const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

		// 检查代码是否在 Jest 中运行
		const isRunningInJest = typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined;
	`

	return (
		<>
			<Alert message="检查代码运行环境" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index