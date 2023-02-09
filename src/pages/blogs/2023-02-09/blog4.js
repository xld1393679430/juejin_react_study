import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		在寻找一个 npm 包的文档时，我们经常使用 Google 来搜索它的主页和 npm 页面。

		事实证明，我们可以通过运行以下命令快速进入首页：
		
		$ npm home PACKAGE_NAME
		打开它的存储库也很容易：
		
		$ npm repo PACKAGE_NAME
		这两个命令都会在您的默认浏览器中打开目标网站。
	`

	return (
		<>
			<Alert message="打开包的主页或仓库" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index