import { Divider } from 'antd'
import HoverAlert from './components/hover_alert'
import CssBanner from './components/css_banner'

const Index = () => {
	return (
		<div>
			<h1>借助 CSS 来监听事件</h1>

			<HoverAlert />
			<Divider />
			<CssBanner />
		</div>
	)
}

export default Index