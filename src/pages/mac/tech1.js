import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		有一个快捷方式可以让这个过程更简单——按住【 alt键 】的同时在所需位置单击鼠标
	`

	return (
		<>
			<Alert message="将光标移动到 macOS 命令中的任意位置" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index