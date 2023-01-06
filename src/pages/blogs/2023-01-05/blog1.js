import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		二者都是异步去加载外部JS文件
		Async是在外部JS加载完成后，浏览器空闲时，Load事件触发前执行；而Defer是在JS加载完成后，整个文档解析完成后执行。
		Defer更像是将<script>标签放在</body>之后的效果，但是它由于是异步加载JS文件，所以可以节省时间。

		建议：依赖性不强的js使用async加载，依赖性强的js使用defer加载，
	`

	return (
		<>
			<Alert message="script defer/async" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index