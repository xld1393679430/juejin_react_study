import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		二者都是异步去加载外部JS文件
		Async是在外部JS加载完成后，浏览器空闲时，Load事件触发前执行；而Defer是在JS加载完成后，整个文档解析完成后执行。
		Defer更像是将<script>标签放在</body>之后的效果，但是它由于是异步加载JS文件，所以可以节省时间。

		<script>
		如果没有附加属性，许多浏览器将阻止后续脚本的加载，直到加载和评估相关脚本为止。对于第三方脚本，这不仅是一个性能问题，而且还有可能出现单点故障 (SPOF)。
		
		<script async>
		使用异步，浏览器可以在其他 HTML 解析和下载活动的同时下载脚本资源，但它会在下载完成后立即评估 JavaScript，并在脚本评估发生时暂停 HTML 解析。如果脚本评估需要在页面加载的早期发生，这是最佳选择。
		
		<script defer>
		使用 defer，脚本加载将与 HTML 解析和其他资源的获取并行发生，并且只有在 HTML 完全解析后才会评估脚本。这是任何第三方标签的最佳选择，其评估不如访问者的快速呈现体验重要。

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