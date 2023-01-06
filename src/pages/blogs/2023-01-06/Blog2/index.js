import { Alert } from 'antd'
import Blog from './blog'

const Index = () => {

	return (
		<>
			<Alert message="React 应用程序中产品导览的实用指南(自动启动)" type="success" />
			<p>
				<a href="https://www.smashingmagazine.com/2020/08/guide-product-tours-react-apps/">[来源]：React 应用程序中产品导览的实用指南
				</a>
			</p>
			<hr />
			<Blog />
		</>
	)
}

export default Index