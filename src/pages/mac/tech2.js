import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
	在 macOS 上，我们可以按【 cmd+ shift+组合4键 】开始截屏。

	尽管我们可以移动鼠标来调整捕获区域的大小，但左上角是固定的。有时候我们要调整左上角不方便。
	
	escape在这种情况下，您可以按下并按住该键，而不是按下该键并重试space。移动鼠标也会移动屏幕截图区域。
	`

	return (
		<>
			<Alert message="在 macOS 上移动屏幕截图区域" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index